import { Injectable } from '@angular/core';
import { Customer } from '../entities/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl= "http://localhost:9091/api/v1/customer"
   }

   public getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerUrl);
  }
  
  public deleteCustomer(customerId: number): Observable<any>{
    return this.http.delete(`${this.customerUrl}/${customerId}`);
  }
}
