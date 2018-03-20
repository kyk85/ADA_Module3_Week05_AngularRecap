import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

import { ProductService } from '../app/product.service';
import { CartService } from '../app/cart.service';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

import { AuthService } from './auth.service';

const routes: Routes = [
  {path: 'products', component: PageListComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'review', component: OrderReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    ProductDetailsComponent,
    OrderComponent,
    OrderReviewComponent,
    CartComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    ProductService,
    CartService,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
