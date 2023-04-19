import { PastCartItem } from "./past-cart-item";
import { Payment } from "./payment"

export class Order{
    orderId: number;
    billingDate: string;
    billingAmount: number;
    billingAddress: string;
    payment: Payment;
    cartItems: PastCartItem[];
}