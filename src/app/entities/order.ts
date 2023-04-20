import { PastCartItem } from "./past-cart-item";
import { PaymentRes } from "./payment-res";

export class Order {
    orderId: number;
    billingDate: string;
    billingAmount: number;
    billingAddress: string;
    payment: PaymentRes;
    cartItems: PastCartItem[];
}