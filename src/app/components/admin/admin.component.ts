import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { Product } from 'src/app/entities/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers: Customer[];
  products: Product[];
  constructor(private _customer: CustomerService, private _product: ProductService) { }
  
  ngOnInit(): void {

    this._customer.getAllCustomers().subscribe(data=>{
      this.customers=data;
    });

    this._product.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }

}
