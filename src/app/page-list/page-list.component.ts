import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  phones: Product[];
  selectedItem: Product;
  newphones: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };


  constructor(private productService: ProductService, private cartService: CartService, public router: Router) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.phones);
  }

  onSelect(item: Product) {
    this.selectedItem = item;
    // console.log(this.selectedItem);
  }

  getProducts(): void {
    this.productService.getItems()
    .subscribe(data => this.phones = data);
    // console.log(this.phones);
  }

  addItem() {
    this.productService.addItem(this.newphones);
    this.newphones = {
      id: 0,
      name: '',
      description: '',
      price: 0,
    };
  }

  addToCart(item: Product) {
    this.cartService.addItem(item);
    this.router.navigateByUrl('/cart');
  }

}
