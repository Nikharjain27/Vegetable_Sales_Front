import { Component, Inject, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { Product } from 'src/app/entities/product';
import { EditComponent } from '../edit/edit.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from 'src/app/entities/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  customers: Customer[];
  products: Product[];
  orders: Order[];
  constructor(private _admin: AdminService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    // this.getAllCustomers();
    // this.getAllProduct();
    // this.getAllOder();
  }

  // private getAllCustomers(){
  //   this._admin.getAllCustomers().subscribe(data=>{
  //     this.customers=data;
  //   });

  // }

  // private getAllProduct(){
  //   this._admin.getAllProducts().subscribe(data=>{
  //     this.products=data;
  //   });

  // }

  // private getAllOder(){
  //   this._admin.getAllOders().subscribe(data=>{
  //     this.orders=data;
  //    });
  // }

  // openEditCustomerForm(){
  //   let dialogRef = this._dialog.open(EditComponent,{
  //     width: '600px',
  //     height: 'auto',
  //     data:{whichform:"customer"}
  //   });
  //   dialogRef.afterClosed().subscribe(e=>{
  //     console.log("dailog closed");
  //   });
  // }

  // openEditProductForm(){
  //   let dialogRef = this._dialog.open(EditComponent,{
  //     width: '600px',
  //     height: 'auto',
  //     data:{whichform:"product",
  //           prodata: "productdata"}
  //   });
  //   dialogRef.afterClosed().subscribe(e=>{
  //     console.log("dailog closed");
  //   });
  // }

  // openEditOrderForm(){
  //   let dialogRef = this._dialog.open(EditComponent,{
  //     width: '600px',
  //     height: 'auto',
  //     data:{whichform:"order",
  //           oddata: "oderdata"
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(e=>{
  //     console.log("dailog closed");
  //   });
  // }

  // openDeleteBox(){
  //   this._dialog.open(DeleteComponent);
  // }

  // deleteCustomer(customerId: number){
  //   return this._admin.deleteCustomer(customerId).subscribe({
  //     next: (res) =>{
  //      alert("Customer deleted successfully");
  //      this.getAllCustomers();
  //     },
  //     error:() => {
  //     alert("Error while deleting customer");
  //     }
  //     });
  // }

  // deleteProducts(productId: number){
  //   return this._admin. deleteProduct(productId).subscribe({
  //     next: (res) =>{
  //       alert("Product deleted successfully");
  //       this.getAllProduct();
  //      },
  //       error:() => {
  //      alert("Error while deleting product");
  //     }
  //      });
  // }

  // updateCustomer(){
  //   return this._admin.updateCustomer(customerId: number).subscribe({
  //     next: (res) => {
  //       alert("Customer Updated Succesfully");
  //       this.getAllCustomers();
  //     },
  //     error:() => {
  //       alert("Errore while updating Customer");
  //     }
  //   });
  // }
}
