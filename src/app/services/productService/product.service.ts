import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/product/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASEURL = "http://localhost:9091/api/v1/product";
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.BASEURL}`);
  }

  addProduct(product: Product): Observable<any>{
    return this.http.post(`${this.BASEURL}`, product);
  }

  updateProduct(product: Product):Observable<any>{
   return this.http.put(`${this.BASEURL}`,product);
  }

getProductById(productId: number): Observable<Product>{
  return this.http.get<Product>(`${this.BASEURL}/${productId}`);
}

getProductByName(productName:string): Observable<Product>{
  return this.http.get<Product>(`${this.BASEURL}/$(productName)`)
}

deleteProduct(productId: number): Observable<Product>{
  return this.http.delete<Product>(`${this.BASEURL}/${productId}`);
}

}
