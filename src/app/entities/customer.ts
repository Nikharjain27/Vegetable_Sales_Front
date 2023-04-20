import { Cart } from "./cart";
import { Order } from "./order";

export class Customer {
    customerId: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerPassword: string;
    customerAddress: string;
    customerPincode: string;
    customerCity: string;
    cart: Cart;
    orders: Order[];
}
