import { Injectable } from '@angular/core';
import { Product } from '../app/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  // newphones: Product = {
  //   id: 0,
  //   name: '',
  //   description: '',
  //   price: 0,
  // };

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  addItem(item) {
    this.productsCollection.add(item);
  }

  getItems(): Observable<Product[]> {
    return this.products;
  }

  /* selectItem(id: number): Observable<Product> {
    return of(this.products.find(data => data.id === id));
  } */

}
