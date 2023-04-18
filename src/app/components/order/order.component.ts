import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from '../payment/payment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(PaymentComponent, {
      width: '600px',
      height: '500px',
    });

    dialogRef.afterOpened().subscribe(res => {
      console.log("Dialog Opened");
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("Dialog Closed");
    });
  }
}
