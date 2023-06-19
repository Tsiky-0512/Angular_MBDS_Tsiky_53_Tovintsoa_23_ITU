
export type Purchase = {
    purchaseId?:number ,
    price?:number,
    loading?:string,
    stateTransaction?: string,
    begin ?: string , 
    end ?: string ,
    supplier?: {
        supplierId ?: string 
    },
    car?: {
        carId ?: string
        chassis ?: string
    }      
}