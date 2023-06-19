/**
 * Configuration de tableau dynamique
 */
export type Configuration = {
   [key:string] : {
        identifiants:string;
        title:string;
        header:string[];
        label:{[key:string]:string};
        filter:boolean;
        pagination:boolean;
        typeData:{[key:string]:any};
        enumValue:{[key:string]:any};
        link:{[key:string]:string};
        withSelection:boolean;
        selectionReference:string;
        sort?:boolean;
        ctaAction:boolean;
        ctaEdit?:boolean;
        ctaDetails?:boolean;
        ctaDelete?:boolean; 
        advancedSearchButton?:boolean;
        clearFilterButton?:boolean;
        ctaFunction?:{ctaDelete?:Function,ctaDetails?:Function,ctaEdit?:Function};
        specificButton?:{color?:string,label?:string,ctaAction?:Function}
   }
}

export type DataTable = {
   size:number;
   data:Array<any>;
}

export type Pagination = {
   pageNumber:number;
   nbPerPage:number
}

enum OperatorEnum {
   inferior = ">",
   superior = "<",
   egal = "="
}

export enum State  {
   ORDERED = 'ORDERED',
   IMPORT = 'IMPORT',
   PORT = 'PORT',
   UNLOAD = 'UNLOAD',
   ON_WAY = 'ON_WAY',
   IN_STOCK = 'IN_STOCK',
   SOLD = 'SOLD',
   DELIVERED = 'DELIVERED'
}

export type Operator = {
   places?:OperatorEnum;
   doors?:OperatorEnum;
   cylinders?:OperatorEnum;
}  
