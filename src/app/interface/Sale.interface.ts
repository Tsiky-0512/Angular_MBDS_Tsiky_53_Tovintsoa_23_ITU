import { Car } from "./car.interfaces"
import { Customer } from "./Csutomer.interface";

export type Sale = {
    carId?: string;
    customerId?: string; 
    price?:string;
    date?: string;
    car?:Car;
    customer?:Customer;
    idSale?:string;
}