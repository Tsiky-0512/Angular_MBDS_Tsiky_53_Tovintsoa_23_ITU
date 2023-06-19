import { Car } from "../interface/car.interfaces"
import { Container } from "../interface/container.interface"
import { Customer } from "../interface/Csutomer.interface"
import { Currency } from "../interface/currency.interface"
import { Purchase } from "../interface/purchase.interface"
import { Sale } from "../interface/Sale.interface"
import { DateState } from "../interface/state.interfaces"
import { Supplier } from "../interface/Supplier.interface"
import { Operator, State } from "../interface/table.interfaces"
import { Transaction } from "../interface/transaction.interface"

export const carRequest = (numPage: number, perPage: number,withState:string,car:Car,operator:Operator) => {
    let body = {
        "page": numPage ? numPage : 0,
        "size": perPage ? perPage : 0,
        "sort": [],
        "car":  {
            "carId":car?.carId ? car?.carId : "",
            "mileage": car?.mileage ? car?.mileage : "",
            "fuel": car?.fuel ? car?.fuel : "",
            "transmission": car?.transmission ? car?.transmission : "",
            "transmissionType": car?.transmissionType ? car?.transmissionType : "",
            "handDrive": car?.handDrive ? car?.handDrive : "",
            "color":  car?.color ? car?.color : "",
            "motorPower":  car?.motorPower ? car?.motorPower : "",
            "chassis": car?.chassis ? car?.chassis : "",
            "places": car?.places ? car?.places : 0,
            "doors": car?.doors ? car?.doors : 0,
            "cylinder": car?.cylinder ? car?.cylinder : 0,
            "model": {
                "model": car?.model?.model ? car?.model?.model : "",
                "brand": {
                    "brandName": car?.model?.brand?.brandName ? car?.model?.brand?.brandName : ""
                }
            },
            "carType": {
                "type": car?.carType?.type ? car?.carType?.type : ""
            },
            "stateCar": {
                "dateBegin": car?.stateCar?.dateBegin ? car?.stateCar?.dateBegin : "",
                "dateEnd":  car?.stateCar?.dateEnd ? car?.stateCar?.dateEnd : "",
                "isReserved": car?.stateCar?.isReserved ? car?.stateCar?.isReserved : "",
            },
        },
        "operators": [{
            "field": "places",
            "operator": operator?.places ? operator?.places : "none"
        }, {
            "field": "doors",
            "operator": operator?.doors ? operator?.doors : "none"
        }, {
            "field": "cylinders",
            "operator": operator?.cylinders ? operator?.cylinders : "none"
        }],
    }

    if (withState) {
        body = withState === "yes" ? Object.assign({withState : true},body) : Object.assign({withState : false},body); 
    }
    return body;
}


export const brandRequest = (page:number,perPage:number,brandId:string,brandName:string,showModel:boolean,sort:Array<{column:string,order:string}>) => {
    return {
        "brand" : {
            "brandId" : brandId ? brandId : 0,
            "brandName" : brandName ? brandName : ""
        },
        "showModel" : showModel,
        "page" : page ? page : 0 ,
        "size" : perPage ? perPage : -1 ,
        "sort" : sort
    }
}

export const modelRequest = (page:number,perPage:number,modelId:string,model:string,brandId:string,brandName:string,sort:Array<{column:string,order:string}>) => {
    return {
        "model" : {
            "modelId" : modelId,
            "model" : model ,
            "brand" :{
                "brandId" :brandId,
                "brandName" : brandName
            }
        },
        "page" : page ? page : 0 ,
        "size" : perPage ? perPage : -1 ,
        "sort" : sort
    }
}

export const carTypeRequest = (idCartype:string,type:string,page:number,size:number,sort:Array<{column:string,order:string}>) => {
    return {
        "carType" : {
            "id" : idCartype,
            "type" : type
        },
        "page" : page,
        "size" : size,
        "sort" : sort
    }
}

export const stateCarRequest = (carId:string,date:DateState,isReserved:string,state?:string) => {
    return {
        "carId" : carId,
        "statusCar" : {    
            "orderDate" : date?.orderDate ? date?.orderDate :  "",
            "importDate" : date?.importDate ? date?.importDate :  "",
            "arrivedPortDate" : date?.arrivedPortDate ? date?.arrivedPortDate :  "",
            "onWayDate" : date?.onWayDate ? date?.onWayDate :  "",
            "inStockDate" : date?.inStockDate ? date?.inStockDate :  "",
            "soldDate" : date?.soldDate ? date?.soldDate :  "",
            "deliveredDate" : date?.deliveredDate ? date?.deliveredDate :  "",
            "unloadingDate" : date?.unloadingDate ? date?.unloadingDate :  "",
            "state" : state,
            "isReserved": isReserved
        }
    }
}

export const stateRequestBuilder = (date:string,state:string):DateState => {
    
    const dateState:DateState = {};
    switch (state) {
        case State.ORDERED:
            dateState.orderDate = date;
            break;
        case State.IMPORT:
            dateState.importDate = date;
            break;
        case State.PORT:
            dateState.arrivedPortDate = date;
            break;    
        case State.UNLOAD:
            dateState.unloadingDate = date;
            break;
        case State.ON_WAY:
            dateState.onWayDate = date;
            break;
        case State.IN_STOCK:
            dateState.inStockDate = date;
            break;
        case State.IMPORT:
            dateState.deliveredDate = date;
            break;
    }
    return dateState;
}


export const currencyRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Currency) => {
    return {
        "page" : page,
         "size" : perPage,
         "sort" : sort,
         "currency" : {
             "currencyId" : filter.currencyId ? filter.currencyId?.toString() : "", 
             "currency":filter.currency ,
             "currencyKey" :filter.currencyKey 
         } 
     } 
}

export const customerRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Customer) => {
    return {
        "page" : page,
         "size" : perPage,
         "sort" : sort,
         "customer" : {
            "customerId" :filter.customerId ? filter.customerId?.toString() : "",
            "name" : filter.name ? filter.name : "" ,
            "lastName" : filter.lastName ? filter.lastName : "" ,
            "contact" : filter.contact ? filter.contact : "" ,
            "cin" : filter.cin ? filter.cin : ""
        }
     } 
}


export const supplierRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Supplier) => {
    return {
        "page" : page,
         "size" : perPage,
         "sort" : sort,
         "supplier" : {
            "supplierId" :filter.supplierId ? filter.supplierId?.toString() : "",
            "name" : filter.name ? filter.name : "" ,
            "location" : filter.location ? filter.location : "" 
        }
     } 
}

export const containerRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Container) => {
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "container" : {
            "containerId" : filter.containerId ? filter.containerId :  "",
            "containerNumber" : filter.containerNumber ? filter.containerNumber :  "",
            "priceContainer" : filter.priceContainer ? filter.priceContainer :  "",
            "supplier" : {
                "supplierId" : filter.supplier?.supplierId ? filter.supplier.supplierId : "" ,
                "name" : filter.supplier?.name ? filter.supplier.name : "",
                "location" : filter.supplier?.location ? filter.supplier.location : "",
            },
            "currency" :{
                "currencyId" : filter.currency?.currencyId ? filter.currency.currencyId : "", 
                "currency": filter.currency?.currency ? filter.currency.currency : "",
                "currencyKey" :filter.currency?.currencyKey ? filter.currency.currencyKey : "",
            }
        },
        "operators" : [{
            "field" : "containerNumber" ,
             "operator" : "none"
        }]
    }
}

export const saleRequest = (sale:Sale) => {
    return {
        "carIds" : [sale.carId],
        "customerId":sale.customerId,
        "price":sale.price,
        "date" : sale.date
    }
}

export const findSaleRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Sale) =>{
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "sale" : {
            "idSale" : filter?.idSale ? filter?.idSale :  "" ,
            "priceCar" : filter?.price ? filter?.price : "", 
            "customer" : {
                "customerId" : filter?.customer?.customerId ? filter?.customer?.customerId : "",
                "name" : filter?.customer?.name ? filter?.customer?.name : "",
                "lastName" : filter?.customer?.lastName ? filter?.customer?.lastName : "",
                "contact" : filter?.customer?.contact ? filter?.customer?.contact : "",
                "gender" : filter?.customer?.gender ? filter?.customer?.gender : "", 
                "cin" :  filter?.customer?.cin ? filter?.customer?.cin : "", 
            },
            "car" : {
                "carId": filter?.car?.carId ? filter?.car?.carId : "",
                "transmission" : filter?.car?.transmission ? filter?.car?.transmission : "",
                "transmissionType" : filter?.car?.transmissionType ? filter?.car?.transmissionType : "",
                "handDrive" : filter?.car?.handDrive ? filter?.car?.handDrive : "",
                "color" : filter?.car?.color ? filter?.car?.color : "",
                "motorPower" : filter?.car?.motorPower ? filter?.car?.motorPower : "",
                "chassis" : filter?.car?.chassis ? filter?.car?.chassis : "",
                "model" :{
                    "modelId": filter?.car?.model?.modelId ? filter?.car?.model?.modelId : "",
                    "model" :  filter?.car?.model?.model ? filter?.car?.model?.model: "" ,
                    "brand" : {
                        "brandName" : filter?.car?.model?.brand?.brandName ? filter?.car?.model?.brand?.brandName : "" ,
                    }
                },
                "carType" : {
                    "type" : filter?.car?.carType?.type ? filter?.car?.carType?.type : "" ,
                }
            }
        },
         "operators" : [{
            "field" : "priceCar" ,
            "operator" : "none"
        }]
    }
}


export const insertTransactionQuery = (body:Transaction) => {
    return {
        saleId : body.saleId ,
        transactions : [{
            transactionDate : body.transactionDate,
            description : body.description ,
            reference : {
                reference : body.reference 
            },
            debit : body.montant , 
            credit : "" 
        }] 
    }
}

export const transactionRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Transaction) => {
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "saleTransaction" : {
            "sale" : {
                "idSale" :filter?.saleId ? filter?.saleId : "" , 
                "customer" : {
                    "name" : filter?.customer?.name ,
                    "lastName" : filter?.customer?.lastName , 
                }
            },
            "transaction" : {
               "description" : filter?.description ? filter?.description : "" ,
                "reference" : {
                    "idReference" : filter?.idReference ? filter?.idReference : "" , 
                    "reference" : filter?.reference ? filter?.reference : ""
                }   
            }
        },
        "operators" : [{
            "field" : "transactionDate" ,
            "operator" : "none"
        }]
    }
    
}


export const transactionLogRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Transaction) => {
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "transaction" : {
            "description" : filter?.description ? filter?.description : "" ,
            "reference" : {
                "idReference" : filter?.idReference ? filter?.idReference : "" , 
                "reference" : filter?.reference ? filter?.reference: "" 
            },
            "debit" : filter?.debit ? filter?.debit : "" , 
            "credit" : filter?.credit ? filter?.credit : "" ,
            "solde" :filter?.solde ? filter?.solde : "" ,
            "begin" : filter?.begin ? filter?.begin : "" ,
            "end" : filter?.end ? filter?.end : "" ,
        }
    }
}

export const containerCarRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Container) => {
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "container" : {
            "containerCarId" : "" , 
            "container" : {
                "containerId" : filter?.containerId ? filter?.containerId : "",
                "containerNumber" : filter?.containerNumber ? filter?.containerNumber : ""
            },
            "car" : {
                "carId" :  filter?.carId ? filter?.carId : ""
            }
        }
    }
}

export const carNotInContainer = (page:number,perPage:number,sort:Array<{column:string,order:string}>,numberChassis:string) => {
    return {
        "page" : page ,
        "size" : perPage ,
        "sort" : sort,
        "chassis" : numberChassis 
    }
}


export const addCarContainer = (containerNumber:string,listCarId:Array<string>) => {
    return {
        "container" : {
            "containerId":'',
            "containerNumber" : containerNumber,
            "priceContainer" : ""
        },
        "carIds" : listCarId
    }
}

export const updateCurrencyRequest = (currency:Currency) => {
    return {
        "critere" : {
            "currencyId" : currency?.currencyId , 
            "currency":"",
            "currencyKey" :"" 
        } ,
        "update" : { 
            "currency":currency?.currency,
            "currencyKey" :currency?.currencyKey 
        } 
    }
}

export const listPurchaseRequest = (page:number,perPage:number,sort:Array<{column:string,order:string}>,filter:Purchase) => {
    return {
        "page" : page,
        "size" : perPage,
        "sort" : sort,
        "purchaseDetails" : {
            "purchase" : filter
        }
    }
}