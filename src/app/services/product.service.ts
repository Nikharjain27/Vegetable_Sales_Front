import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASEURL = 'http://localhost:9091/product-section';
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('authenticationToken');

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.BASEURL}/products`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.BASEURL}/product`, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.BASEURL}/product`, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASEURL}/product/${productId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  getProductByName(productName: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASEURL}/product/by-name/${productName}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.BASEURL}/product/${productId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${this.token}`,
      }),
    });
  }
}
