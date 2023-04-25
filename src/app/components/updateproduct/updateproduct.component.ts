import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product: Product;
  ngForm: FormGroup;

  constructor(private productService: ProductService,
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


  UpdateProduct() {
    this.productService.updateProduct(this.product).subscribe({
      next: (data) => {
        alert("Vegetable updated successfully");
        console.log(data);
        this.router.navigate(['/admin/admin-product-list']);
      },
      error: (error) => {
        console.log("Error updating product data");
        console.log(error);
      }
    })
  }


  onSubmit() {
    console.log(this.product);
    this.UpdateProduct();
  }

  validateForm() {
    this.ngForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerPassword: ['', Validators.required],
      customerAddress: ['', Validators.required],
    });
  }

}
