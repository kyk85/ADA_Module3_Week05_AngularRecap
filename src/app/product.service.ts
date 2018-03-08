import { Injectable } from '@angular/core';
import { Product } from '../app/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  phones: Product[] = [{
    name: 'iPhone X',
    description: 'The latest and greatest!',
    price: 3999
  }, {
    name: 'Huawei P10 Plus',
    description: 'Better than the rest!',
    price: 2499
  }, {
    name: 'LG G15',
    description: 'The one and only!',
    price: 2399
  }];

  newphones: Product = {
    name: '',
    description: '',
    price: 0,
  };

  constructor() { }

  addItem(item) {
    this.phones.push(item);
  }

  getItems(): Observable<Product[]> {
    return of(this.phones);
  }

}
