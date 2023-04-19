import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-curdproduct',
  templateUrl: './curdproduct.component.html',
  styleUrls: ['./curdproduct.component.css']
})
export class CURDproductComponent implements OnInit {

  products: Product[] = [];
  searchText = '';
  dataSource = new MatTableDataSource();

  constructor(private productService: ProductService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
      console.log(data);
    })
  }

  setProduct = (data: any) => {
    this.products = data;
  }

  // add new product
  openProductDialog(){
    this.dialog.open(AddproductComponent,{
      width: '40%'
    }).afterClosed().subscribe(val=>{
      this.getAllProducts();
    })
  }

  updateProductDialog(product: Product){
    this.dialog.open(AddproductComponent,{
      width: "40%",
      data:{
        product:product
      }
    }).afterClosed().subscribe(val => {
      this.getAllProducts();
    })
  }

  deleteProduct(productId: number){
    this.productService.deleteProduct(productId).subscribe({
      next: (res) =>{
        alert("Product deleted successfully");
        this.getAllProducts();
      },
      error:() => {
        alert("Error while deleting product");
      }
    })
  }

  goToCURDProductList(){
    this.router.navigate(['/admin-product-list']);
  }
}
