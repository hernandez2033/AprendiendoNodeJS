//para importan la pagina operaciones.js usamos la funcion require
//el resultado de esa funcion lo almasenamos en una cosntante
const operaciones = require('./operaciones.js');

//para invocar la funion que pertenese ala pagina operaciones devemos de usar la constante que creamos con el nombre operaciones
console.log(operaciones.add(5,2));//imprimo en patalla el resultado de la funcion sumar
console.log(operaciones.substract(10,5));//imprimo en patalla el resultado de la funcion restar
console.log(operaciones.multiply(5,5));////imprimo en patalla el resultado de la funcion multipicar
console.log(operaciones.divide(10,2));////imprimo en patalla el resultado de la funcion divicion