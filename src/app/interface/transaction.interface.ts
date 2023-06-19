import { Customer } from "./Csutomer.interface";

export type Transaction = {
    saleId?:string;
    transactionDate?:string;
    description?:string;
    reference?:string;
    idReference?:string;
    montant?:string;
    customer?:Customer;
    debit?:number;
    credit?:number;
    solde?:number;
    begin?:string;
    end?:string;
}