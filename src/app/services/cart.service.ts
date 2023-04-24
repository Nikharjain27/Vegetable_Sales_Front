import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9091/cart-section';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  customerEmail = localStorage.getItem('customerEmailId');
  token = localStorage.getItem('authenticationToken');
  cartId = localStorage.getItem('customerCartId');

  getCart(cartID: number): Observable<any> {
    return this.http.get(`${baseUrl}/${this.cartId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }
  addToCart(cartId: any, productId: number): Observable<any> {
    return this.http.post(
      `${baseUrl}/add-to-cart/${cartId}/${productId}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        }),
      }
    );
  }

  increaseQuantity(cartId: number, cartItemId: number): Observable<any> {
    return this.http.post(`${baseUrl}/${cartId}/${cartItemId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  removeFromCart(cartId: number, cartItemId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${cartId}/${cartItemId}`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  removeAllFromCart(cartId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${cartId}` ,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }
}
