export const tableConfig  = {
    "listCar": {
        "Sans état" : {
            "identifiants":"sans-etat",
            "title":"Liste de Voiture sans état",
            "header" : [
                "chassis",
                "description",
                "fuel",
                "transmission",
                "transmissionType",
                "handDrive",
                "places",
                "doors",
                "color",
                "model.model",
                "model.brand.brandName",
                "carType.type"
            ],
            "label": {
                "chassis":"Chassis",
                "description":"Description",
                "fuel":"Carburants",
                "Transmission":"Transmission",
                "transmissionType":"Type de Transmission",
                "handDrive":"Pilotage",
                "places":"Nb de Places",
                "doors":"Nb de Portes",
                "color":"Couleur",
                "model.model":"Modèle",
                "model.brand.brandName":"Marque",
                "carType.type" : "Type de Voiture"
            },
            "sort":true,
            "filter":true,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number",
            },
            "link":{
                "chassis" : "/dashboard/details-car/[carId]"
            },
            "enumValue":{},
            "withFilter":true,
            "withSelection":false,
            "selectionReference":"carId",
            "ctaAction":false,
            "ctaDelete":true
        },
        "Avec état" : {
            "identifiants":"avec-etat",
            "title":"Liste de Voiture Avec état",
            "header" : [
                "chassis",
                "description",
                "stateCar.state",
                "stateCar.isReserved",
                "stateCar.orderDate",
                "stateCar.importDate",
                "stateCar.arrivedPortDate",
                "stateCar.unloadingDate",
                "stateCar.onWayDate",
                "stateCar.inStockDate",
                "stateCar.soldDate",
                "stateCar.deliveredDate"
            ],
            "label": {
                "chassis":"Chassis",
                "description":"Description",
                "stateCar.state" : "Etat",
                "stateCar.isReserved" : "Réservé",
                "stateCar.orderDate" : "Date de commande",
                "stateCar.importDate" : "Date d'importation",
                "stateCar.arrivedPortDate": "Date d'arrivé au Port",
                "stateCar.unloadingDate" : "Date de déchargement",
                "stateCar.onWayDate" : "En route le",
                "stateCar.inStockDate":"En stock",
                "stateCar.soldDate": "Date de vente",
                "stateCar.deliveredDate" : "Date de Livraison"
            },
            "link":{
                "chassis" : "/dashboard/details-car/[carId]"
            },
            "typeData" : {
                "carType.type":"card",
                "carId":"number",
                "stateCar.orderDate" : "date",
                "stateCar.importDate" : "date",
                "stateCar.arrivedPortDate": "date",
                "stateCar.unloadingDate" : "date",
                "stateCar.onWayDate" : "date",
                "stateCar.inStockDate":"date",
                "stateCar.soldDate": "date"
            },
            "enumValue":{
                "stateCar.state":{
                    "ORDERED":"Commandé",
                    "IMPORT":"Importé",
                    "PORT":"Arrivé au Port",
                    "UNLOAD":"Déchargé",
                    "ON_WAY":"En route",
                    "IN_STOCK":"En stock",
                    "SOLD":"Vendu",
                    "DELIVERED":"Livrée"
                }
            },
            "filter":false,
            "pagination":true,
            "withSelection":false,
            "selectionReference":"carId",
            "ctaAction":false,
            "advancedSearchButton":true
        }
    }
}