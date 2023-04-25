import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;
  error : string | null;
  authenticationToken: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private customerService: CustomerService,
    // private customer: Customer
  ) {}

  ngOnInit() {
    const token = localStorage.getItem("authenticationToken");
    if(token){
      this.router.navigate(['/home']);
    }
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
          // console.log(responseData);
          this.authenticationToken = responseData;
          localStorage.setItem(
            'authenticationToken',
            this.authenticationToken.token
          );
          let time = new Date().getTime();
          time += 1000 * 60 * 60;
          localStorage.setItem('tokenExpirationTime', time.toString());
          localStorage.setItem(
            'customerEmailId',
            this.loginForm.value.customerEmail
          );
          this.customerService
            .getCustomerByEmail(this.loginForm.value.customerEmail)
            .subscribe({
              next:(responseData) => {
                localStorage.setItem(
                  'customerCartId',
                  responseData.cart.cartId.toString()
                );
                console.log(responseData);
              },
              error:(error) => {
                console.log(error);
              }
        });
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false;
          // console.log(error.error);
          this.error = error.error;
        }
      );
  }
}
