import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  customers: Customer[];
  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
  }

  deleteCustomer(customerId: number){
    this._customerService.deleteCustomer(customerId);
  }
}
