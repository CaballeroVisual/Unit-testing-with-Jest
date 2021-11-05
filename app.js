// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yens
    let valueInYen = valueInDollar * 0.8 * 127.9;
    //return the Yen value
    return valueInYen;
}

// we declare the function with the exact name "fromYenToPoundn"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.01 * 0.8;
    //return the dollar value
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar };
