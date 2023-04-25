import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartItem } from 'src/app/entities/cart-item';
import { PaymentComponent } from '../payment/payment.component';
import { Cart } from 'src/app/entities/cart';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  totalAmountl: number;

  currentCart: Cart;
  currentCartItem: CartItem;
  currentIndex: number;


  constructor(private cartService: CartService, private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,private custService: CustomerService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("authenticationToken");
    if(!token){
      this.router.navigate(['/login']);
    }
    this.getCart(localStorage.getItem("customerCartId"));
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if(tokenExpirationTime){
      const nowTime = new Date().getTime();
      if(nowTime-(+tokenExpirationTime) > 0){
        alert("Session Expired. Please Login Again...");
        this.router.navigate(['/login']);
      }
    }
  }

  getCart(cartId: any): void {
    this.cartService.getCart(cartId).subscribe({
      next: (data) => {
        this.currentCart = data;
        this.currentCart.cartItems.sort((a, b) => a.cartItemId.toString().localeCompare(b.cartItemId.toString()));
        console.log(this.currentCart);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  increaseQuantity(cartId: number, cartItemId: number): void {
    this.cartService.increaseQuantity(cartId, cartItemId).subscribe({
      next: (data) => {
        this.currentCart = data;
        this.currentCart.cartItems.sort((a, b) => a.cartItemId.toString().localeCompare(b.cartItemId.toString()));
        console.log(this.currentCart);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeFromCart(cartId: number, cartItemId: number): void {
    this.cartService.removeFromCart(cartId, cartItemId).subscribe({
      next: (data) => {
        this.currentCart = data;
        this.currentCart.cartItems.sort((a, b) => a.cartItemId.toString().localeCompare(b.cartItemId.toString()));
        console.log(this.currentCart);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeAllFromCart(cartId: number) {
    this.cartService.removeAllFromCart(cartId).subscribe({
      next: (data) => {
        this.currentCart = data;
        alert("Cart clared successfully!");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setActiveCartItem(cartItem: CartItem, index: number): void {
    this.currentCartItem = cartItem;
    this.currentIndex = index;
  }

  openDialog() {
    // const flag = this.custService.checkAddress();
    // if(flag){
    //   alert("Please Fill Address First...");
    //   this.router.navigate(['/profile']);
    // }
    let dialogRef = this.dialog.open(PaymentComponent, {
      width: '600px',
      height: '500px',
    });

    dialogRef.afterOpened().subscribe(res => {
      console.log("Dialog Opened");
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("Dialog Closed");
    });
  }

  cartPresent(){
    if(this.currentCart.cartItems.length == 0){
      return false;
    }
    else return true;
  }

}
