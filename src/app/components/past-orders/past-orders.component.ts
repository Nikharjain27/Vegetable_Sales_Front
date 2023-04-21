import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { Order } from 'src/app/entities/order';
import { PastCartItem } from 'src/app/entities/past-cart-item';
import { CustomerService } from 'src/app/services/customer.service';
import { PastCartItemsComponent } from '../past-cart-items/past-cart-items.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  orders: Order[];
  email: any = localStorage.getItem("customerEmailId");

  constructor(private customerService: CustomerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.customerService.getCustomerByEmail(this.email).subscribe({
      next: (data) => {
        this.orders = data.orders;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        console.log("Error while fetching user data");
      }
    })
  }

  showPastCartItems(cartItems: PastCartItem[]) {
    this.dialog.open(PastCartItemsComponent, {
      width: '600px',
      height: '500px',
      data: {
        cartItems: cartItems
      }
    }).afterClosed().subscribe(val => {

    })
  }

}
