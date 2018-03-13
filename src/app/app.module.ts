import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService } from '../app/product.service';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'products', component: PageListComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'review', component: OrderReviewComponent},
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    ProductDetailsComponent,
    OrderComponent,
    OrderReviewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
