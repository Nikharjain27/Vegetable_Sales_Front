import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(private customerService: CustomerService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getCustomerData();
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if(tokenExpirationTime){
      const nowTime = new Date().getTime();
      if(nowTime-(+tokenExpirationTime) > 0){
        alert("Session Expired. Please Login Again...");
        this.router.navigate(['/login']);
      }
    }
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
    this.router.navigate(['/past-orders']);
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

  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
