import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PaymentDTO } from '../entities/payment-dto';
import { PaymentRes } from '../entities/payment-res';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:9091/payment-section";

  constructor(private httpClient: HttpClient) { }

  getAllPayments(): Observable<PaymentRes[]> {
    return this.httpClient.get<PaymentRes[]>(`${this.baseURL}/payments`, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("authenticationToken")}` }) });
  }

  addPayment(payment: PaymentDTO): Observable<PaymentRes> {
    return this.httpClient.post<PaymentRes>(`${this.baseURL}/payment`, payment, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("authenticationToken")}` }) });
  }

  getPaymentById(id: number): Observable<PaymentRes> {
    return this.httpClient.get<PaymentRes>(`${this.baseURL}/payment/${id}`, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("authenticationToken")}` }) });
  }

  deletePayment(id: number): Observable<PaymentRes[]> {
    return this.httpClient.delete<PaymentRes[]>(`${this.baseURL}/payment/${id}`, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("authenticationToken")}` }) });
  }

  convertOrderToPayment(id: number, payment: PaymentDTO): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseURL}/payment/convertToPayment/${id}`, payment, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("authenticationToken")}` }) });
  }

}
