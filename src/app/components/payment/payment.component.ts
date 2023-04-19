import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Payment } from 'src/app/entities/payment';
import { PaymentDTO } from 'src/app/entities/payment-dto';
import { PaymentUi } from 'src/app/entities/payment-ui';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: PaymentUi = new PaymentUi();
  paymentDto: PaymentDTO = new PaymentDTO();

  ngForm1: FormGroup;
  ngForm2: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>, private paymentService: PaymentService,
    private fb: FormBuilder, private router: Router
  ) {
    this.validateForm1();
    this.validateForm2();
  }

  ngOnInit(): void {

  }

  onCard() {
    this.paymentDto.type = "Card";
    this.paymentService.convertOrderToPayment(1, this.paymentDto).subscribe({
      next: (data) => {
        console.log("Payment successful");
        this.router.navigate(['/paymentdone']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onUPI() {
    this.paymentDto.type = "UPI";
    this.paymentService.convertOrderToPayment(1, this.paymentDto).subscribe({
      next: (data) => {
        console.log("Payment successful");
        this.router.navigate(['/paymentdone']);
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
