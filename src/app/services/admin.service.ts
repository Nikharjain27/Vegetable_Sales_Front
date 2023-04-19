import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer';
import { Product } from '../entities/product';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:9091/admin-section";

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}/view/customers`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/view/products`);
  }

  getAllOders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}/view/orders`)
  }

  deleteCustomer(customerId: number): Observable<Customer[]>{
    return this.httpClient.delete<Customer[]>(`${this.baseURL}/delete/customer/${customerId}`);
  }

  deleteProduct(productId: number): Observable<Product[]>{
    return this.httpClient.delete<Product[]>(`${this.baseURL}/delete/products/${productId}`);
  }
}
