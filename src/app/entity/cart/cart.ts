import { CartItem } from "../cartItem/cart-item";


export class Cart {

  cartId: number;
  totalAmount: number;
  cartItems: Array<CartItem>;
}
