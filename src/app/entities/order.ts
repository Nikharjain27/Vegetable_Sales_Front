import { CartItem } from "./past-cart-item";
import { Payment } from "./payment"
import { PaymentRes } from "./payment-res";

export class Order{
    orderId: number;
    billingDate: string;
    billingAmount: number;
    billingAddress: string;
    payment: PaymentRes;
    cartItems: CartItem[];
}