import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from 'src/app/entities/customer';
import { AdminService } from 'src/app/services/admin.service';
import { EditComponent } from '../../edit/edit.component';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customers: Customer[];
  constructor(private _admin: AdminService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCustomers();
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

  deleteCustomer(customerId: number){
    return this._admin.deleteCustomer(customerId).subscribe({
      next: (res) =>{
       alert("Customer deleted successfully");
       this.getAllCustomers();
      },
      error:() => {
      alert("Error while deleting customer");
      }
      });
  }
}
