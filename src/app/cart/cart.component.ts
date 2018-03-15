import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems;
  public totalPrice: number;
  public totalQty = 0;
  public subTotal: number;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    // console.log(this.cartService.cart);
    this.cartItems = this.cartService.cart;
    this.totalPrice = this.cartService.totalPrice;
    this.totalQty = this.cartService.itemCount;
    console.log(this.cartItems);
    /* this.cartService.getCart().subscribe(data => {
      this.cart = data;
      console.log(this.cart);
    }); */
  }

  removeAllItem() {
    this.cartService.removeAllItem();
    this.refreshCart();
  }

  removeItem(cartitem) {
    this.cartService.removeItem(cartitem);
    this.cartItems = this.cartService.cart;
  }

  editQuantity(quantity, cartItem) {
  }

  private refreshCart() {
    this.cartItems = this.cartService.cart;
    this.totalPrice = this.cartService.totalPrice;
    this.totalQty = this.cartService.itemCount;
  }

}
