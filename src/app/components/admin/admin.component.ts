import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { Product } from 'src/app/entities/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers: Customer[];
  products: Product[];
  constructor(private _customer: CustomerService, private _product: ProductService, private _dialog: MatDialog) { }
  
  ngOnInit(): void {

    this._customer.getAllCustomers().subscribe(data=>{
      this.customers=data;
    });

    this._product.getAllProducts().subscribe(data=>{
      this.products=data;
    });

   
  }

  openEditCustomerForm(){
    let dialogRef = this._dialog.open(EditComponent,{
      width: '600px',
      height: 'auto',
      data:{whichform:"customer"}
    });
    dialogRef.afterClosed().subscribe(e=>{
      console.log("dailog closed");
    });
  }

  openEditProductForm(){
    let dialogRef = this._dialog.open(EditComponent,{
      width: '600px',
      height: 'auto',
      data:{whichform:"product",
            prodata: "productdata"}
    });
    dialogRef.afterClosed().subscribe(e=>{
      console.log("dailog closed");
    });
  }

  openDeleteBox(){
    this._dialog.open(DeleteComponent);
  }


  deleteCustomer(customerId: number){
    return this._customer.deleteCustomer(customerId);
  }
}
