import { Cart } from "../entity/cart/cart";
import { Payment } from "./payment";

export class Customer {
    customerId: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerPassword: string;
    customerAddress: string;
    customerPincode: string;
    customerCity: string;
    cart:Cart;
    payment:Payment
}
