import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PastCartItem } from 'src/app/entities/past-cart-item';

@Component({
  selector: 'app-past-cart-items',
  templateUrl: './past-cart-items.component.html',
  styleUrls: ['./past-cart-items.component.css']
})
export class PastCartItemsComponent implements OnInit {

  cartItems: PastCartItem[];

  constructor(@Inject(MAT_DIALOG_DATA) public cartItemsData: any) { }

  ngOnInit(): void {
    this.cartItems = this.cartItemsData.cartItems;
  }

}
