import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl: string;

  constructor(private http: HttpClient) {
    this.orderUrl = 'http://localhost:9091/order-section/';
  }

  public getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.orderUrl}/orders`);
  }

  public deleteOrderById(orderId: number): Observable<any> {
    return this.http.delete(`${this.orderUrl}/order/${orderId}`);
  }

  public getOrderById(orderId: number): Observable<any> {
    return this.http.get(`${this.orderUrl}/order/${orderId}`);
  }

  public updateOrderById(orderId: number, order: Order): Observable<any> {
    return this.http.put(`${this.orderUrl}/order/${orderId}`, order);
  }

  public postOrder(order: Order): Observable<any> {
    return this.http.post(`${this.orderUrl}/order`, order);
  }
}
