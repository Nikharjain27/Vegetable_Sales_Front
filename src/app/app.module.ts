import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductService } from './services/product.service';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerService } from './services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { EditComponent } from './components/edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DeleteComponent } from './components/delete/delete.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { ProductsComponent } from './components/products/products.component';
import { SearchProductPipe } from './components/search/search-product.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from '@angular/material/expansion';
import { CURDproductComponent } from './components/crudproduct/curdproduct.component';
import { MatPaginator } from '@angular/material/paginator';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    PaymentComponent,
    CartComponent,
    OrderComponent,
    AdminComponent,
    EditComponent,
    DeleteComponent,
    SearchProductPipe,
    CURDproductComponent,
    AddproductComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCommonModule,
    MatPaginatorModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [
    ProductService,
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
