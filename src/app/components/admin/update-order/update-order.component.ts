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

  getMyTime(time: any){
    const myTime = (time as string);
    // console.log(myTime);
    const hr = time[0];
    const flag = (hr>=0 && hr<=12) ? true : false;
    if(flag){
      return myTime[0]+":"+myTime[1]+":"+myTime[2]+" AM";
    }
    return myTime[0]+":"+myTime[1]+":"+myTime[2]+" PM";
  }
}
