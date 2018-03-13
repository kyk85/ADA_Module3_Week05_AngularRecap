import { Injectable } from '@angular/core';
import { Product } from '../app/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  phones: Product[] = [{
    id: 1,
    name: 'iPhone X',
    description: 'The latest and greatest!',
    price: 3999
  }, {
    id: 2,
    name: 'Huawei P10 Plus',
    description: 'Better than the rest!',
    price: 2499
  }, {
    id: 3,
    name: 'LG G15',
    description: 'The one and only!',
    price: 2399
  }];

  newphones: Product = {
    id: 0,
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

  selectItem(id: number): Observable<Product> {
    return of(this.phones.find(data => data.id === id));
  }

}
