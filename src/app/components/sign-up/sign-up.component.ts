import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm : FormGroup = new FormGroup({});
  authenticationToken: any;
  isLoading: boolean = false;
  error: string = '';

  constructor(private httpClient: HttpClient,private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem("authenticationToken");
    if(token){
      this.router.navigate(['/home']);
    }
    this.signupForm = new FormGroup({
      'customerName' : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z][A-Za-z0-9_ ]{2,29}$")]),
      'customerEmail' : new FormControl('',[Validators.required,Validators.email,Validators.minLength(13),Validators.pattern("^[a-zA-Z0-9+_.-]+@gmail.com$")]),
      'customerPhone' : new FormControl('',[Validators.required,Validators.pattern("^\\d{10}$"),Validators.min(7112334567),Validators.max(9876543210)]),
      'customerPassword' : new FormControl('',[Validators.required,Validators.minLength(8)]),
      // 'confirmPassword' : new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
 
  onSubmit() {
    // console.log(this.signupForm.value);
    this.isLoading = true;
    this.httpClient
      .post('http://localhost:9091/customer-section/customer-registration', this.signupForm.value, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      })
      .subscribe((responseData) => {
        // console.log(responseData);
        this.isLoading = false;
        this.authenticationToken = responseData;
        localStorage.setItem("authenticationToken",this.authenticationToken.token);
        let time = new Date().getTime();
        time += (1000*60*60);
        localStorage.setItem("tokenExpirationTime",time.toString());
        localStorage.setItem("customerEmailId",this.signupForm.value.customerEmail);
        this.router.navigate(['/home']);
      },error =>{
        // console.log(error.error);
        this.error = error.error;
        this.isLoading = false;
      });
  }


}
