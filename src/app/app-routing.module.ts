import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CURDproductComponent } from './components/crudproduct/curdproduct.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { UpdateOrderComponent } from './components/admin/update-order/update-order.component';


const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'order',  component: OrderComponent},
  { path: 'profile',  component: ProfileComponent},
  { path: 'payment',  component: PaymentComponent},
  { path: 'cart',  component: CartComponent}, 
  { path: 'admin',  component: AdminComponent , children:[{path: 'customers', component: UpdateCustomerComponent},{path: '', component: UpdateCustomerComponent},{path: 'products', component: UpdateProductComponent},{path: 'orders', component: UpdateOrderComponent}]}, 
  {path: 'signup', component: SignUpComponent},
  { path: 'product-list-for-customer', component: ProductsComponent },
  { path: 'admin-product-list', component: CURDproductComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
