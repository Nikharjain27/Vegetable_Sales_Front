import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';
import { Payment } from 'src/app/entities/payment';
import { PaymentDTO } from 'src/app/entities/payment-dto';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();
  paymentDto: PaymentDTO = new PaymentDTO();
  customer: Customer;
  email: any = localStorage.getItem("customerEmailId");

  ngForm1: FormGroup;
  ngForm2: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>, private paymentService: PaymentService,
    private fb: FormBuilder, private router: Router, private customerService: CustomerService
  ) {
    this.validateForm1();
    this.validateForm2();
  }

  ngOnInit(): void {
    const token = localStorage.getItem("authenticationToken");
    if(!token){
      this.router.navigate(['/login']);
    }
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if(tokenExpirationTime){
      const nowTime = new Date().getTime();
      if(nowTime-(+tokenExpirationTime) > 0){
        alert("Session Expired. Please Login Again...");
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }
    this.customerService.getCustomerByEmail(this.email).subscribe({
      next: (data) => {
        this.customer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        console.log("Error while fetching user data");
      }
    })
  }

  onCard() {
    this.paymentDto.type = "Card";
    this.paymentService.convertOrderToPayment(this.customer.customerId, this.paymentDto).subscribe({
      next: (data) => {
        console.log("Payment successful");
        this.router.navigate(['/order']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onUPI() {
    this.paymentDto.type = "UPI";
    this.paymentService.convertOrderToPayment(this.customer.customerId, this.paymentDto).subscribe({
      next: (data) => {
        console.log("Payment successful");
        this.router.navigate(['/order']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  validateForm1() {
    this.ngForm1 = this.fb.group({
      cardNumber: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      mm: ['', Validators.required],
      yy: ['', Validators.required],
      cvv: ['', Validators.required]
    })
  }

  validateForm2() {
    this.ngForm2 = this.fb.group({
      upi: ['', Validators.required]
    })
  }

}
