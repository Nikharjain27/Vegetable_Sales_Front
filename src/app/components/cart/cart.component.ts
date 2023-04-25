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

  constructor(private cartService: CartService, private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router, private custService: CustomerService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("authenticationToken");
    if (!token) {
      this.router.navigate(['/login']);
    }
    this.getCart(localStorage.getItem("customerCartId"));
    const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");
    if (tokenExpirationTime) {
      const nowTime = new Date().getTime();
      if (nowTime - (+tokenExpirationTime) > 0) {
        alert("Session Expired. Please Login Again...");
        localStorage.clear();
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
        alert("Cart cleared successfully!");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  proceedToPayment() {
    this.custService.checkAddress().subscribe({
      next: (value) => {
        console.log(value);
        if (!value) {
          this.openDialog();
        }
        else {
          alert("You have not filled address in profile. Please update it first.");
          this.router.navigate(['/profile']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  openDialog() {
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

  cartIsEmpty() {
    if (this.currentCart.cartItems.length == 0) {
      return false;
    }
    else return true;
  }

}
