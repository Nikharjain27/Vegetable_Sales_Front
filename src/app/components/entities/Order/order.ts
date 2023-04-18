import { CartItem } from "./cart-item";
import { Payment } from "./payment"

export class Order{
    orderId: number;
    billingDate: string;
    billingAmount: number;
    billingAddress: string;
    payment: Payment;
    cartItems: CartItem;
}