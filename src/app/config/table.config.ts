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
    },
    "listCurrencyToAdd":{
        "Liste Unité Ajouté":{
            "identifiants":"list-currency-added",
            "title":"Liste d'Unité Ajouté",
            "header" : [
                "currency",
                "currencyKey"
            ],
            "label": {
                "currency":"Unité Monétaire",
                "currencyKey":"Acronyme Monétaire"
            },
            "typeData" : {
            },
            "enumValue":{},
            "link":{},
            "selectionReference":"",
            "sort":false,
            "filter":false,
            "pagination":false ,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true
        }
    },
    "listCurrency":{
        "Liste Unité Monétaire":{
            "identifiants":"list-currency",
            "title":"Liste d'Unité Monétaire",
            "header" : [
                "currencyId",
                "currency",
                "currencyKey"
            ],
            "label": {
                "currencyId":"ID",
                "currency":"Unité Monétaire",
                "currencyKey":"Acronyme Monétaire"
            },
            "typeData" : {
            },
            "enumValue":{},
            "link":{},
            "selectionReference":"",
            "sort":true,
            "pagination":true ,
            "filter":true,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":false
        }
    },
    "listCustomerToAdd":{
        "Liste clients ajouté":{
            "identifiants":"list-customer-added",
            "title":"Liste des clients Ajouté",
            "header" : [
                "name",
                "lastName",
                "contact",
                "gender",
                "cin"
            ],
            "label": {
                "name": "Nom",
                "lastName":"Prénom",
                "contact":"Contact",
                "gender":"Genre",
                "cin":"Numéro CIN"
            },
            "link":{},
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":false,
            "filter":false,
            "pagination":false ,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true
        }
    },
    "listCustomer":{
        "Liste Clients":{
            "identifiants":"list-customer",
            "title":"Liste Clients",
            "header" : [
                "customerId",
                "name",
                "lastName",
                "contact",
                "gender",
                "cin"
            ],
            "label": {
                "customerId":"ID",
                "name":"Nom",
                "lastName":"Prénom",
                "contact":"Contact",
                "gender":"Genre",
                "cin":"CIN"
            },
            "link":{
                "customerId":"/dashboard/details-customer/[customerId]"
            },
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":true,
            "pagination":true ,
            "filter":true,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":false
        }
    },
    "listSupplierToAdd":{
        "Liste Fournisseur ajouté":{
            "identifiants":"list-supplier-added",
            "title":"Liste des Fournisseurs Ajouté",
            "header" : [
                "name",
                "location"
            ],
            "label": {
                "name": "Nom",
                "location":"Location"
            },
            "link":{},
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":false,
            "filter":false,
            "pagination":false ,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true
        }
    },
    "listSupplier":{
        "Liste Fournisseur":{
            "identifiants":"list-supplier",
            "title":"Liste Fournisseurs",
            "header" : [
                "supplierId",
                "name",
                "location"
            ],
            "label": {
                "supplierId":"ID Fournisseur",
                "name":"Nom",
                "location":"Siège"
            },
            "link":{
                "supplierId" : "/dashboard/details-supplier/[supplierId]"
            },
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":false,
            "pagination":true ,
            "filter":false,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":false
        }
    },
    "listContainerToAdd":{
        "Liste Conteneur ajouté":{
            "identifiants":"list-container-added",
            "title":"Liste des Conteneurs Ajouté",
            "header" : [
                "containerNumber",
                "priceContainer",
                "arrived"
            ],
            "label": {
                "containerNumber": "Numéro Conteneur",
                "priceContainer":"Prix Conteneur",
                "arrived":"Date d'arriver"
            },
            "link":{},
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":false,
            "filter":false,
            "pagination":false ,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true
        }
    },
    "listContainer":{
        "Liste Conteneurs":{
            "identifiants":"list-container",
            "title":"Liste Conteneur",
            "header" : [
                "containerNumber",
                "priceContainer",
                "currency.currency",
                "arrived"
            ],
            "label": {
                "containerNumber":"Numéro Conteneur",
                "priceContainer":"Prix Conteneur",
                "currency.currency":"Unité Monétaire",
                "arrived":"Date d'arriver"
            },
            "link":{
                "containerNumber" : "/dashboard/details-container/[containerNumber]"
            },
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":true,
            "pagination":true ,
            "filter":true,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":false
        }
    },
    "listSale": {
        "Liste Vente":{
            "identifiants":"list-sale",
            "title":"Liste Vente",
            "header" : [
                "idSale",
                "priceCar",
                "car.chassis",
                "car.description",
                "car.color",
                "customer.name",
                "customer.lastName",
                "customer.contact",
                "customer.cin",
            ],
            "label": {
                "idSale":"Numéro Vente",
                "price":"Prix de Vente en Ar",
                "car.chassis":"Chassis",
                "car.description":"Description",
                "car.color":"Couleur",
                "customer.name":"Nom de Client",
                "customer.lastName":"Prénom de Client",
                "customer.contact":"Contact",
                "customer.cin":"CIN"
            },
            "link":{
                "idSale":"/dashboard/details-sale/[idSale]"
            },
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":true,
            "pagination":true ,
            "filter":true,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":true
        }
    },
    "listSaleByCustomer": {
        "Liste Vente":{
            "identifiants":"list-sale",
            "title":"Liste Voiture acheté",
            "header" : [
                "car.chassis",
                "car.description",
                "car.color",
                "car.carType.type",
                "car.transmission",
                "car.transmissionType",
                "car.handDrive"
            ],
            "label": {
                "car.chassis":"Chassis",
                "car.description":"Description",
                "car.color":"Couleur",
                "car.carType.type":"Type",
                "car.transmission":"Transmission",
                "car.transmissionType":"Type de transmission",
                "car.handDrive":"Type de Volant"
            },
            "link":{
                "car.chassis":"/dashboard/details-car/[car.carId]"
            },
            "typeData" : {
            },
            "enumValue":{},

            "selectionReference":"",
            "sort":false,
            "pagination":true ,
            "filter":false,
            "withSelection":false,
            "ctaAction":false,
            "ctaDelete":false,
            "ctaEdit":false,
            "ctaDetails":false
        }
    },
    "listTransaction": {
        "Liste Transaction":{
            "identifiants":"list-transaction",
            "title":"Liste Transaction",
            "header" : [
                "transaction.transactionId",
                "transaction.description",
                "transaction.reference.reference",
                "transaction.debit",
                "transaction.credit",
                "transaction.solde"
            ],
            "label": {
                "transaction.transactionId":"Numéro de Transaction",
                "transaction.description":"Description",
                "transaction.reference.reference":"Référence",
                "transaction.debit":"Débit",
                "transaction.credit":"Crédit",
                "transaction.solde":"Solde"
            },
            "link":{},
            "typeData" : {
            },
            "enumValue":{},
            "selectionReference":"",
            "sort":false,
            "pagination":false ,
            "filter":false,
            "withSelection":false,
            "ctaAction":true,
            "ctaDelete":true,
            "ctaEdit":true,
            "ctaDetails":true
        }
    },
    "listCarContainer":{
        "Liste Voiture dans le Conteneur":{
            "identifiants":"list-car-container",
            "title":"Liste Voiture dans le Conteneur",
            "header" : [
                "car.chassis",
                "car.description",
                "car.model.model",
                "car.model.brand.brandName",
                "car.color",
                "car.carType.type",
                "car.fuel",
                "car.transmission",
                "car.transmissionType",
                "car.handDrive",
                "car.places",
                "car.doors"
            ],
            "label": {
                "car.chassis":"Chassis",
                "car.description":"Description",
                "car.fuel":"Carburants",
                "car.Transmission":"Transmission",
                "car.transmissionType":"Type de Transmission",
                "car.handDrive":"Pilotage",
                "car.places":"Nb de Places",
                "car.doors":"Nb de Portes",
                "car.color":"Couleur",
                "car.model.model":"Modèle",
                "car.model.brand.brandName":"Marque",
                "car.carType.type" : "Type de Voiture"
            },
            "sort":false,
            "filter":false,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number" 
            },
            "link":{
                "car.chassis":"/dashboard/details-car/[car.carId]"
            },
            "enumValue":{},
            "withSelection":false,
            "selectionReference":"carId",
            "ctaAction":true,
            "ctaDelete":true
        }
    },
    "listCarNotInContainer":{
        "Liste Voiture":{
            "identifiants":"list-car",
            "title":"Choisir Voiture",
            "header" : [
                "chassis",
                "description",
                "model.model",
                "model.brand.brandName",
                "color",
                "carType.type",
                "fuel",
                "transmission",
                "transmissionType",
                "handDrive",
                "places",
                "doors"
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
            "sort":false,
            "filter":false,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number" 
            },
            "enumValue":{},
            "link":{},
            "withSelection":true,
            "selectionReference":"carId",
            "ctaAction":false,
        }
    },
    "listLogTransaction":{
        "Liste de Transaction":{
            "identifiants":"list-log-transaction",
            "title":"Journal",
            "header" : [
                "transactionId",
                "reference.reference",
                "description",
                "transactionDate",
                "debit",
                "credit",
                "solde"
            ],
            "label" : {
                "transactionId":"N° de Transaction",
                "description":"Libellé",
                "transactionDate":"Date",
                "reference.reference":"Référence",
                "debit":"Débit",
                "credit":"Crédit",
                "solde":"Solde"
            },
            "sort":false,
            "filter":false,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number" 
            },
            "enumValue":{},
            "link":{},
            "withSelection":false,
            "selectionReference":"transactionId",
            "ctaAction":false,
            "advancedSearchButton":true
        },
        "Charges Variable":{
            "identifiants":"variable-load",
            "title":"Journal",
            "header" : [
                "transactionId",
                "reference.reference",
                "description",
                "transactionDate",
                "debit",
                "credit",
                "solde"
            ],
            "label" : {
                "transactionId":"N° de Transaction",
                "description":"Libellé",
                "transactionDate":"Date",
                "reference.reference":"Référence",
                "debit":"Débit",
                "credit":"Crédit",
                "solde":"Solde"
            },
            "sort":false,
            "filter":false,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number" 
            },
            "enumValue":{},
            "link":{},
            "withSelection":false,
            "selectionReference":"transactionId",
            "ctaAction":false,
            "advancedSearchButton":true
        },
        "Charges Fixe":{
            "identifiants":"fix-load",
            "title":"Journal",
            "header" : [
                "transactionId",
                "reference.reference",
                "description",
                "transactionDate",
                "debit",
                "credit",
                "solde"
            ],
            "label" : {
                "transactionId":"N° de Transaction",
                "description":"Libellé",
                "transactionDate":"Date",
                "reference.reference":"Référence",
                "debit":"Débit",
                "credit":"Crédit",
                "solde":"Solde"
            },
            "sort":false,
            "filter":false,
            "pagination":true ,
            "typeData" : {
                "carType.type":"card",
                "carId":"number" 
            },
            "enumValue":{},
            "link":{},
            "withSelection":false,
            "selectionReference":"transactionId",
            "ctaAction":false,
            "advancedSearchButton":true
        }
    },
    "listPruchase":{
        "Liste des Achats":{
            "identifiants":"list-purchase",
            "title":"Achats",
            "header" : [
                "purchaseId",
                "date",
                "details",
                "car.description",
                "car.chassis",
                "price",
                "currency.currency"
            ],
            "label" : {
                "purchaseId":"ID Achat",
                "date":"Date",
                "details":"Details de Transaction",
                "car.description":"Description",
                "car.chassis":"Chassis",
                "price":"Prix",
                "currency.currency":"Unité Monétaire"
            },
            "sort":false,
            "filter":true,
            "pagination":true ,
            "typeData" : {
                "price":"number" 
            },
            "enumValue":{},
            "link":{
                "purchaseId":"/dashboard/details-purchase/[purchaseId]/[supplier.supplierId]"
            },
            "withSelection":false,
            "selectionReference":"transactionId",
            "ctaAction":false,
            "advancedSearchButton":true,
           
        },
    }

}