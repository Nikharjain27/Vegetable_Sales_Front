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
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductListForAdminComponent } from './components/product-list-for-admin/product-list-for-admin.component';
import { UpdateOrderComponent } from './components/admin/update-order/update-order.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateCustomerComponent as adminUpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'product-list-for-customer', component: ProductsComponent },
  { path: 'admin-product-list', component: ProductListForAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'customers', component: adminUpdateCustomerComponent },
      { path: '', component: UpdateCustomerComponent },
      { path: 'admin-product-list', component: ProductListForAdminComponent },
      { path: 'orders', component: UpdateOrderComponent },
    ],
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'past-orders', component: PastOrdersComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
