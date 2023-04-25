import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseURL = 'http://localhost:9091/customer-section';

  constructor(private httpClient: HttpClient) {}

  checkAddress(): Observable<Boolean> {
    return this.httpClient.post<Boolean>(
      `${this.baseURL}/customer/${localStorage.getItem("customerEmailId")}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(
            'authenticationToken'
          )}`,
        }),
      }
    );
  }

  isLoggedIn() {
    let tokenStr = localStorage.getItem('authenticationToken');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}/customers`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authenticationToken')}`,
      }),
    });
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `${this.baseURL}/customer`,
      customer,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(
            'authenticationToken'
          )}`,
        }),
      }
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.baseURL}/customer`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authenticationToken')}`,
      }),
    });
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}/customer/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authenticationToken')}`,
      }),
    });
  }
  getCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(
      `${this.baseURL}/customer/by-email/${email}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(
            'authenticationToken'
          )}`,
        }),
      }
    );
  }

  deleteCustomer(id: number): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>(
      `${this.baseURL}/customer/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(
            'authenticationToken'
          )}`,
        }),
      }
    );
  }
}
