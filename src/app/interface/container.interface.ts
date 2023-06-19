import { Currency } from "./currency.interface";
import { Supplier } from "./Supplier.interface";

export type Container = {
    containerId?:number;
    containerNumber?:string;
    priceContainer?:string;
    currency?:Currency;
    supplier?:Supplier;
    carId?:string;
}