import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer;
  ngForm: FormGroup;

  constructor(private customerService: CustomerService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public customerData: any,
    private fb: FormBuilder
  ) {
    this.validateForm();
  }

  ngOnInit(): void {
    this.customer = this.customerData.customer;
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe({
      next: (data) => {
        alert("Customer updated successfully");
        console.log(data);
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.log("Error updating customer data");
        console.log(error);
      }
    })
  }

  onSubmit() {
    console.log(this.customer);
    this.updateCustomer();
  }

  validateForm() {
    this.ngForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerPassword: ['', Validators.required],
      customerAddress: ['', Validators.required],
    });
  }
}
