import { CartItem } from "./cart-item";

export class Cart {
  cartId: number;
  totalAmount: number;
  cartItems: CartItem[];
}
