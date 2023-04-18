import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { Product } from 'src/app/entities/product';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from '../entities/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers: Customer[];
  products: Product[];
  orders: Order[];
  constructor(private _admin: AdminService, private _dialog: MatDialog) { }
  
  ngOnInit(): void {

    // this._admin.getAllCustomers().subscribe(data=>{
    //   this.customers=data;
    // });

    this.getAllCustomers();

    this._admin.getAllProducts().subscribe(data=>{
      this.products=data;
    });

   this._admin.getAllOders().subscribe(data=>{
    this.orders=data;
   });

  //  this._admin.deleteCustomer(customerId).subscribe(data=>{
  //   this.customers=data;
  //  })
  }

  private getAllCustomers(){
    this._admin.getAllCustomers().subscribe(data=>{
      this.customers=data;
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
    return this._admin.deleteCustomer(customerId).subscribe({

      next: (res) =>{
      
       alert("Customer deleted successfully");
      
       this.getAllCustomers();
      
      },
      
 error:() => {
      
    alert("Error while deleting product");
        }
      });
  }
}
