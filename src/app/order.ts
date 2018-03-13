import { Cart } from './cart';

export class Order {
    name: String;
    address: String;
    city: String;
    state: String;
    postcode: String;
    country: String;
    cart: Cart;
}
