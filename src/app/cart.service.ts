import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { CartItem } from './cart-item';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class CartService {
  // public cartItem: Product;
  public cart: CartItem[] = [];
  public itemCount = 0;
  public totalPrice = 0;

  constructor() { }
  public getCart(): Observable<CartItem[]> {
    // console.log(this.cart);
    return of(this.cart);
  }

  public addItem(newProduct: Product, quantity: number = 1) {
    // console.log(newProduct);
    const newItem = new CartItem(newProduct, quantity);
    let isAdded = false;
    this.cart.forEach((element) => {
      if (element.product.id === newItem.product.id) {
        element.quantity += quantity;
        isAdded = true;
      }
      });
      if (!isAdded) {
        this.cart.push(newItem);
      }
      this.calculateItemAndPrice();
      // console.log(newItem);
  }

  public removeItem(product: CartItem) {
    this.cart.forEach((element, i) => {
      if (element.product.id === product.product.id) {
        this.cart.splice(i, 1);
      }
    });
    this.calculateItemAndPrice();
  }

  public removeAllItem() {
    this.cart = [];
    this.itemCount = 0;
    this.totalPrice = 0;
    this.calculateItemAndPrice();
    console.log(this.cart);
  }

/*   public editQuantity(cartItem) {
    this.cart.forEach((element) => {
      if (element.product.id === cartItem.id) {
        element.quantity =
      }

    })
  } */

  private calculateItemAndPrice() {
      this.cart.forEach(element => {
        this.totalPrice += element.product.price;
        this.itemCount += element.quantity;
      });
    return this.totalPrice;
  }
}
