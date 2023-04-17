import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductPipe } from './components/search/search-product.pipe';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CURDproductComponent } from './components/curdproduct/curdproduct.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    PaymentComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    SearchProductPipe,
    CURDproductComponent,
    AddproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
