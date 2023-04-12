import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor( private _product: ProductService) { }

  ngOnInit(): void {

    this._product.getAllProducts().subscribe(data=>{
      this.products=data;
    });

  }
}