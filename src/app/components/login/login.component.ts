import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;
  authenticationToken: any;
  constructor(private httpClient: HttpClient,private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      customerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(13),
        Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
      ]),
      customerPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onSubmit() {
    this.isLoading = true;
    this.httpClient
      .post(
        'http://localhost:9091/customer-section/login',
        this.loginForm.value,
        {
          headers: new HttpHeaders({
            'content-type': 'application/json',
          }),
        }
      )
      .subscribe(
        (responseData) => {
          this.isLoading = false;
          console.log(responseData);
          this.authenticationToken = responseData;
          localStorage.setItem(
            'authenticationToken',
            this.authenticationToken.token
          );
          let time = new Date().getTime();
          time += 1000 * 60 * 60;
          localStorage.setItem('tokenExpirationTime', time.toString());
          localStorage.setItem("customerEmailId",this.loginForm.value.customerEmail);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false;
          console.log(error.error);
        }
      );
  }
}
