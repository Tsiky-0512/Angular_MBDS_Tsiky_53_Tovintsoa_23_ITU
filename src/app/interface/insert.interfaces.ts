export type InsertConfig = {
    field:Array<string>;
    label?:{[key:string]:string};
    ctaLabel?:string;
    type:{[key:string]:string};
    control:{[key:string]:string};
    defaultValue:{[key:string]:string | number};
    readonlyField:{[key:string]:boolean};
    onChangeFunction?:{[key:string]:{
        inputChange:Function
    }};
}