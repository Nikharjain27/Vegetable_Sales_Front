import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './components/edit/edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DeleteComponent } from './components/delete/delete.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductPipe } from './components/search/search-product.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateCustomerComponent as adminUpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { PastCartItemsComponent } from './components/past-cart-items/past-cart-items.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductListForAdminComponent } from './components/product-list-for-admin/product-list-for-admin.component';
import { MatTableModule } from '@angular/material/table';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateOrderComponent } from './components/admin/update-order/update-order.component';

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
    AdminComponent,
    EditComponent,
    DeleteComponent,
    SearchProductPipe,
    AddproductComponent,
    PastOrdersComponent,
    PastCartItemsComponent,
    AboutusComponent,
    ContactusComponent,
    LoadingspinnerComponent,
    UpdateproductComponent,
    ProductListForAdminComponent,
    PastCartItemsComponent,
    adminUpdateCustomerComponent,
    PagenotfoundComponent,
    UpdateOrderComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
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
  providers: [
    ProductService,
    CustomerService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
