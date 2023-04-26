import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  searchText = '';
  dataSource = new MatTableDataSource();
  cartId:any;

  constructor(
    private prodService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartId = localStorage.getItem('customerCartId');
    this.getAllProducts();
    const tokenExpirationTime = localStorage.getItem('tokenExpirationTime');
    if (tokenExpirationTime) {
      const nowTime = new Date().getTime();
      if (nowTime - +tokenExpirationTime > 0) {
        alert('Session Expired. Please Login Again...');
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }
  }

  private getAllProducts() {
    this.prodService.getAllProducts().subscribe((data) => {
      this.products = data;
      // console.log(data);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(this.cartId, product.productId).subscribe({
      next: () => {
        alert('Added to cart');
      },
      error: () => {
        alert('Error adding product');
      },
    });
  }
  

  setProducts = (data: any) => {
    this.products = data;
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToProductList() {
    this.router.navigate(['/product-list-for-customer']);
  }
}
