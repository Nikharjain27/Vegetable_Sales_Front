import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer;
  email: any = localStorage.getItem("customerEmail");

  constructor(private customerService: CustomerService) { }

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
        console.log("Error while fetching user data");
      }
    })
  }


  showOrders() {

  }
}
