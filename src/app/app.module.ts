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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductPipe } from './components/search/search-product.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { PastCartItemsComponent } from './components/past-cart-items/past-cart-items.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductListForAdminComponent } from './components/product-list-for-admin/product-list-for-admin.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

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
    UpdateCustomerComponent,
    SearchProductPipe,
    AddproductComponent,
    PastOrdersComponent,
    PastCartItemsComponent,
    AboutusComponent,
    ContactusComponent,
    LoadingspinnerComponent,
    UpdateproductComponent,
    ProductListForAdminComponent,
    PagenotfoundComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
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
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
