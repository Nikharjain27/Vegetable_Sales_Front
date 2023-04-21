import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  product: Product = new Product();
  angForm: FormGroup;
  submitted = false;

  constructor(private productService:ProductService,
    private router: Router,
    private fb: FormBuilder
    ) { 
      this.validateForm();
    }

  ngOnInit(): void {
  }

  newProduct(){
    this.submitted = false;
    this.product = new Product();
  }

  AddNewProduct(){
    this.productService.addProduct(this.product).subscribe({
      next:(data)=>{
        alert("Vegetable added successfully")
        this.goToCURDProductList();
      },
      error: (error) => console.log(error)
    })
  }


  goToCURDProductList() {
    this.router.navigate(['/admin-product-list']);
  }

  onSubmit(){
    console.log(this.product);
    this.AddNewProduct();
  }

  validateForm() {
    this.angForm = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productImage: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
  }
}
