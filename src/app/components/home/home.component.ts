import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private _product: ProductService) { }

  ngOnInit(): void {

    this._product.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }

}
