import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer = new Customer();
  email: any = localStorage.getItem("customerEmailId");

  constructor(private customerService: CustomerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

  private getCustomerData() {
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


  showOrders() {

  }


  updateCustomer(customer: Customer) {
    this.dialog.open(UpdateCustomerComponent, {
      width: '600px',
      height: '500px',
      data: {
        customer: customer
      }
    }).afterClosed().subscribe(val => {
      this.getCustomerData();
    })
  }

}
