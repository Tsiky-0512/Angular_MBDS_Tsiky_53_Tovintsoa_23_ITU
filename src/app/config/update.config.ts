export const updateConfig = {
    "updateCurrency": {
        "field":[
            "currency",
            "currencyKey"
        ],
        "label":{
            "currency":"Unité Monetaire",
            "currencyKey":"Acronyme monétaire"
        },
        "type":{
            "name":"text",
            "location":"text"
        },
        "control":{
            "currency":"not-null",
            "currencyKey":"not-null,minLength:0,maxLength:3"
        },
        "defaultValue":{},
        "readonlyField":{},
        "ctaLabel":"Modifier"
    },
    "updateContainer": {
        "field":[
            "currencyId", 
            "containerNumber",
            "priceContainer",
            "arrived"
        ],
        "label":{
            "supplierId":"ID Fournisseur",
            "currencyId":"Currency",
            "containerNumber":"Numéro Conteneur",
            "priceContainer":"Prix Conteneur",
            "arrived":"Date d'arriver"
        },
        "type":{
            "supplierId":"number",
            "currencyId":"select",
            "containerNumber":"text",
            "priceContainer":"number",
            "arrived":"date"
        },
        "control":{
            "supplierId":"not-null,min:1",
            "currencyId":"not-null,min:1",
            "containerNumber":"not-null,min:1",
            "priceContainer":"not-null,min:1",
            "arrived":""
        },
        "defaultValue": {},
        "readonlyField":{
            "supplierId" : true
        },
        "ctaLabel":"Modifier"
    },
    "updateSupplier": {
        "field":[
            "name",
            "location"
        ],
        "label":{
            "name":"Nom",
            "location":"Pays"
        },
        "type":{
            "name":"text",
            "location":"text"
        },
        "control":{
            "name":"not-null",
            "location":"not-null"
        },
        "defaultValue":{},
        "readonlyField":{},
        "ctaLabel":"Modifier"
    },
    "updateCustomer": {
        "field":[
            // "customerId",
            "name",
            "lastName",
            "contact",
            "gender",
            "cin"
        ],
        "label":{
            "name":"Nom",
            "lastName":"Prénom",
            "contact":"Contact",
            "gender":"Genre",
            "cin":"CIN"            
        },
        "type":{
            "name":"text",
            "location":"text",
            "lastName":"text",
            "contact":"text",
            "gender":"select",
            "cin":"text"
        },
        "control":{
            "name":"not-null",
            "lastName":"not-null",
            "contact":"not-null",
            "gender":"not-null",
            "cin":"not-null",
        },
        "defaultValue":{},
        "readonlyField":{},
        "ctaLabel":"Modifier"
    },
    "updateCar":{
        "field":[    
            "description" ,
            "mileage",
            "fuel" ,
            "transmission" ,
            "transmissionType" ,
            "handDrive"  ,
            "motorPower" ,
            "color",
            "places",
            "doors" ,
            "cylinder" , 
            "modelId",
            "carType"
        ],
        "label":{
            "description" : "Description" ,
            "mileage" : "Kilométrage",
            "fuel" : "Type de Carburant",
            "transmission" :"Transmission",
            "transmissionType" :"Type de Transmission",
            "handDrive"  :"Pilotage",
            "motorPower" :"Puissance Moteur",
            "color":"Couleur",
            "places":"Nb de Places",
            "doors" :"Nb de Portes",
            "cylinder" : "Nb de Cylindre", 
            "modelId":"Modèle",
            "carType":"Type de Voiture"
        },
        "type":{
            "name":"text",
            "location":"text",
            "description" : "text" ,
            "mileage" : "number",
            "fuel" : "select",
            "transmission" :"select",
            "transmissionType" :"select",
            "handDrive"  :"select",
            "motorPower" :"number",
            "color":"text",
            "places":"number",
            "doors" :"number",
            "cylinder" : "number", 
            "modelId":"select",
            "carType":"select"
        },
        "control":{
            "currency":"not-null",
            "currencyKey":"not-null,minLength:0,maxLength:3",
            "name":"not-null",
            "location":"not-null",
            "description" : "not-null" ,
            "mileage" : "not-null,min:0",
            "fuel" : "not-null",
            "transmission" :"not-null",
            "transmissionType" :"not-null",
            "handDrive"  :"not-null",
            "motorPower" :"not-null",
            "color":"not-null",
            "places":"not-null,min:0",
            "doors" :"not-null,min:0",
            "cylinder" : "not-null,min:0", 
            "modelId":"not-null",
            "carType":"not-null"
        },
        "defaultValue":{},
        "readonlyField":{},
        "ctaLabel":"Modifier"
    }
}