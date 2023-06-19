export type Car = {
    carId?: string ;
    mileage?: string ;
    fuel?: string,
    transmission?: string;
    description?: string;
    transmissionType?: string;
    handDrive?: string,
    color?: string;
    motorPower?: string,
    chassis?: string;
    places?: number;
    doors?: number;
    cylinder?: number;
    model?: Model;
    carType?:{type?:string} 
    stateCar?: stateCar;
    mediaCars?: Array<mediaCars>;
}

export type mediaCars = {
    mediaCarId: number;
    link_media:string; 
    type: string
}

export type Model = {
    modelId?:string;
    model?:string;
    brand?:{brandName?:string};
}

export type CarType = {
    model?:string;
    brand?:{brandName?:string};
}

export type stateCar = {
    state?:string;
    dateBegin?:string;
    dateEnd?:String;
    isReserved?:string;
}
