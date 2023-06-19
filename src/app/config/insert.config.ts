export const insertConfig = {
    "insertSupplier":{
        "field":[
            "name",
            "location"
        ],
        "label":{
            "name":"Nom Fournisseur",
            "location":"Location Fournisseur"
        },
        "type":{
            "name":"text",
            "location":"text"
        },
        "control":{
            "name":"not-null,minLength:3",
            "location":"not-null,minLength:3"
        },
        "defaultValue":{},
        "readonlyField":{},
        "ctaLabel":"Ajouter"
    },
    "insertCurrency": {
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
        "ctaLabel":"Ajouter"
    },
    "insertContainer": {
        "field":[
            "supplierId",
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
        "defaultValue": {
            "supplierId":"",
            "currencyId":"",
            "containerNumber":"",
            "priceContainer":"",
            "arrived":""
        },
        "readonlyField":{
            "supplierId" : true
        },
        "ctaLabel":"Ajouter"
    },
    "insertCustomer": {
        "field":[
            "name",
            "lastName",
            "contact",
            "gender",
            "cin"
        ],
        "label":{
            "name": "Nom",
            "lastName":"Prénom",
            "contact":"Contact",
            "gender":"Genre",
            "cin":"Numéro CIN"
        },
        "type":{
            "name": "text",
            "lastName":"text",
            "contact":"text",
            "gender":"select",
            "cin":"text"
        },
        "control":{
            "name":"not-null,minLength:0",
            "lastName":"not-null,minLength:0",
            "contact":"not-null,minLength:10,maxLength:10",
            "gender":"not-null",
            "cin":"not-null,minLength:12,maxLength:12"
        },
        "readonlyField":{},
        "defaultValue":{},
        "ctaLabel":"Ajouter"
    },
    "insertSale": {
        "field":[
            "carId",
            "customerId",
            "price",
            "date"
        ],
        "label":{
            "carId":"Identifians Car",
            "customerId":"Clients",
            "price":"Prix de Vente (en Ar)",
            "date":"Date de vente"
        },
        "type":{
            "carId":"number",
            "customerId":"select",
            "price":"number",
            "date":"datetime-local"
        },
        "control":{
            "carId":"not-null,min:1",
            "customerId":"not-null,min:1",
            "price":"not-null,min:1",
            "date":"not-null"
        },
        "defaultValue": {
            "carId":"",
            "customerId":"",
            "price":"",
            "date":""
        },
        "readonlyField":{
            "carId" : true
        },
        "ctaLabel":"Ajouter"
    },
    "insertCarContainer": {
        "field":[
            "carId",
            "containerId",
            "importDate"
        ],
        "label":{
            "carId":"Identifians Voiture",
            "containerId":"Conteneur",
            "importDate":"Date d'importation"
        },
        "type":{
            "carId":"number",
            "containerId":"select",
            "importDate":"datetime-local"
        },
        "control":{
            "carId":"not-null,min:1",
            "containerId":"not-null,min:1",
            "importDate":"not-null"
        },
        "defaultValue": {
            "carId":"",
            "containerId":"",
            "importDate":"",
        },
        "readonlyField":{
            "carId" : true
        },
        "ctaLabel":"Ajouter"
    },
    "insertTransactionVente": {
        "field":[
            "saleId",
            "transactionDate",
            "description",
            "reference",
            "montant"
        ],
        "label":{
            "saleId":"N° Vente",
            "transactionDate":"Date de transaciton",
            "description":"Description",
            "reference":"Type de Transaction",
            "montant":"Montant (en Ar)"
        },
        "type":{
            "saleId":"number",
            "transactionDate":"datetime-local",
            "description":"text",
            "reference":"select",
            "montant":"number"
        },
        "control":{
            "saleId":"not-null,min:1",
            "transactionDate":"not-null",
            "description":"not-null",
            "reference":"text",
            "montant":"number"
        },
        "defaultValue": {
            "saleId":"",
            "transactionDate":"",
            "description":"",
            "reference":"",
            "montant":""
        },
        "readonlyField":{
            "saleId" : true
        },
        "ctaLabel":"Ajouter"
    },
    "advancedSearchForm": {
        "field":[
            "chassis",
            "description",
            "status",
            "begin",
            "end"
        ],
        "label":{
            "chassis":"Chassis",
            "description":"Description",
            "status":"Status",
            "begin":"Date début",
            "end":"Date Fin"
        },
        "type":{
            "chassis":"text",
            "description":"text",
            "status":"select",
            "begin":"datetime-local",
            "end":"datetime-local"
        },
        "control":{
            "chassis":"",
            "description":"",
            "status":"",
            "begin":"",
            "end":""
        },
        "defaultValue": {
            "saleId":"",
            "transactionDate":"",
            "description":"",
            "reference":"",
            "montant":""
        },
        "readonlyField":{},
        "ctaLabel":"Rechercher"
    },
    "insertReference":{
        "field":[
            "reference",
        ],
        "label":{
            "reference":"Type de Transaction"
        },
        "type":{
            "reference":"text"
        },
        "control":{
            "reference":"not-null",
        },
        "defaultValue": {
            "reference":""
        },
        "readonlyField":{
        },
        "ctaLabel":"Ajouter"
    },
    "insertVariableLoad":{
        "field":[
            "transactionDate",
            "description",
            "reference",
            "typeTransaction",
            "solde",
            "currency"
        ],
        "label":{
            "transactionDate":"Date de Transaction",
            "description":"Description",
            "reference":"Référence de Transaction",
            "typeTransaction":"Type de Transaction",
            "solde":"Montant",
            "currency":"Unité Monétaire"
        },
        "type":{
            "transactionDate":"datetime-local",
            "description":"text",
            "reference":"select",
            "typeTransaction":"select",
            "solde":"number",
            "currency":"select"
        },
        "control":{
            "transactionDate":"not-null",
            "description":"not-null",
            "reference":"not-null",
            "typeTransaction":"not-null",
            "solde":"not-null,min:1",
            "currency":"not-null"
        },
        "defaultValue": {
            "transactionDate":"",
            "description":"",
            "reference":"",
            "typeTransaction":"",
            "solde":"",
            "currency":""
        },
        "readonlyField":{
        },
        "ctaLabel":"Ajouter"
    },
    "advancedSearchFormTransaction": {
        "field":[
            "begin",
            "end",
            "reference"
        ],
        "label":{
            "begin":"Date début",
            "end":"Date Fin",
            "reference":"Référence"
        },
        "type":{
            "begin":"date",
            "end":"date",
            "reference":"select"
        },
        "control":{
            "begin":"",
            "end":"",
            "reference":""
        },
        "defaultValue": {
            "saleId":"",
            "transactionDate":"",
            "description":"",
            "reference":"",
            "montant":""
        },
        "readonlyField":{},
        "ctaLabel":"Rechercher"
    },
    "advancedSearchFormVariable": {
        "field":[
            "begin",
            "end",
            "reference"
        ],
        "label":{
            "begin":"Date début",
            "end":"Date Fin",
            "reference":"Référence"
        },
        "type":{
            "begin":"date",
            "end":"date",
            "reference":"select"
        },
        "control":{
            "begin":"",
            "end":"",
            "reference":""
        },
        "defaultValue": {
            "saleId":"",
            "transactionDate":"",
            "description":"",
            "reference":"",
            "montant":""
        },
        "readonlyField":{},
        "ctaLabel":"Rechercher"
    },
    "insertPurchaseCar": {
        "field":[
            "date",
            "supplier",
            "carId",
            "price",
            "currency",
            "exchangeRate",
            "details"
        ],
        "label":{
            "date":"Date de commande",
            "supplier":"Fournisseur",
            "currency":"Unité Monétaire",
            "exchangeRate":"Devise",
            "carId":"Identifiants Voiture",
            "price":"Prix",
            "details":"Details"
        },
        "type":{
            "date":"datetime-local",
            "supplier":"select",
            "currency":"select",
            "exchangeRate":"number",
            "carId":"number",
            "price":"number",
            "details":"text"
        },
        "control":{
            "date":"not-null",
            "supplier":"not-null",
            "currency":"not-null",
            "exchangeRate":"not-null",
            "carId":"not-null,min:1",
            "price":"not-null,min:1",
            "details":"not-null"
        },
        "defaultValue": {
            "date":"",
            "supplier":"",
            "currency":"",
            "exchangeRate":"",
            "carId":"",
            "price":"",
            "details":"Importation de Voiture"
        },
        "readonlyField":{
            "carId":true
        },
        "ctaLabel":"Ajouter"
    },
    "insertTransactionPurchase":{
        "field":[
            "transactionDate",
            "description",
            "solde",
        ],
        "label":{
            "transactionDate":"Date de Transaction",
            "description":"Description",
            "solde":"Solde en Ariary",
        },
        "type":{
            "transactionDate":"datetime-local",
            "description":"text",
            "solde":"text"
        },
        "control":{
            "transactionDate":"not-null",
            "description":"not-null",
            "solde":"not-null"
        },
        "defaultValue": {
            "transactionDate":"",
            "description":"",
            "solde":""
        },
        "readonlyField":{
        },
        "ctaLabel":"Ajouter"
    },
}