import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/entities/order';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  orders: Order[];
  constructor(private _admin: AdminService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllOder();
  }

  private getAllOder(){
    this._admin.getAllOders().subscribe(data=>{
      this.orders=data;
     });
  }
}
