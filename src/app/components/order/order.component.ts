import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from '../payment/payment.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private dialog: MatDialog) { }
  customerEmail = localStorage.getItem("customerEmailId");
  token = localStorage.getItem("authenticationToken");
  errorMsg: any;
  order: any = null;
  cartItems: any;
  ngOnInit(): void {
    this.httpClient
      .get(
        `http://localhost:9091/order-section/order-by-email/${this.customerEmail}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }),
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
          this.order = responseData;
          this.cartItems = this.order.cartItems;
        },
        (error) => {
          this.errorMsg = error.error;
          // console.log(error);
        }
      );
  }
  printThePage(){
    window.print();
  }

}
