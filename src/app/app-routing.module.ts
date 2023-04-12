import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent  },
  { path: 'home',  component: HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'order',  component: OrderComponent},
  { path: 'profile',  component: ProfileComponent},
  { path: 'payment',  component: PaymentComponent},
  { path: 'cart',  component: CartComponent}, 
  {path: 'signup', component: SignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
