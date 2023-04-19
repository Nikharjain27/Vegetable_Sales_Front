import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/productService/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product = new Product();
  angForm: FormGroup;

  constructor(private productService:ProductService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private fb: FormBuilder
    ) { 
      this.validateForm();
    }

  ngOnInit(): void {
    this.product = this.updateData.product;
    console.log(this.updateData);
  }

  AddNewProduct(){
    if(!this.product){
      this.productService.addProduct(this.product).subscribe({
        next: (data) => {
          alert("Product added successfully")
          this.goToCURDProductList();
        },
        error: (error)=> console.log(error)
      })
    }
    if(this.product){
      this.productService.updateProduct(this.product).subscribe({
        next: (data)=> {
          alert("Product updated successfully");
          this.goToCURDProductList();
        },
        error: (error) => console.log(error)
      })
    }
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
