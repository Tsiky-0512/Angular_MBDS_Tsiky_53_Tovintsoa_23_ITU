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
}