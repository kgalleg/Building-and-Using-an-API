fetch("http://localhost:8088/food")
    .then( data => data.json())
    .then( foodData => {
        console.table(foodData)
        foodData.forEach( foodItem => {
            fetch( `https://world.openfoodfacts..../"foodItem.barcode`)

        })
    })

    //.then is js promises - when you make a call to using http it takes some time to happen. and we need to know when that data has come back so we can process that data. 

//     .then( data => data.json())
// same as 
// .then( function(data) { 
//     return data.json90})