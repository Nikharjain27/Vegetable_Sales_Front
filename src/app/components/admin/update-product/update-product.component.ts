import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/entities/product';
import { AdminService } from 'src/app/services/admin.service';
import { EditComponent } from '../../edit/edit.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products: Product[];
  constructor(private _admin: AdminService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  private getAllProduct(){
    this._admin.getAllProducts().subscribe(data=>{
      this.products=data;
    });

  }
  openEditProductForm(){
    let dialogRef = this._dialog.open(EditComponent,{
      width: '600px',
      height: 'auto',
      data:{whichform:"product",
            prodata: "productdata"}
    });
    dialogRef.afterClosed().subscribe(e=>{
      console.log("dailog closed");
    });
  }

  deleteProducts(productId: number){
    return this._admin. deleteProduct(productId).subscribe({
      next: (res) =>{
        alert("Product deleted successfully");
        this.getAllProduct();
       },  
        error:() => {
       alert("Error while deleting product");
      }
       });
  }
}
