import { CartItem } from './cart-item';

export class Cart {
    cartItems: CartItem[];
    public totalItems: number;
    public totalPrice: number;
}
