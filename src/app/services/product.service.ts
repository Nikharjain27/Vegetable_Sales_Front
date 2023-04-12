import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl= "http://localhost:9091/api/v1/product"
   }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }
}
