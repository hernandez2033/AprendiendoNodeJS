//creando un object

const basico = {};

function add(x1,x2){
    return x1+x2;
}

//funcion restar
function substract(x1,x2){
    return x1 - x2;
}
//funcion multiplicar
function multiply(x1,x2){
    return x1*x2;
}
//funcion dividir
function divide(x1,x2){
    if(x2 == 0){
        console.log("No es pocible dividir entre 0");
    }else{
        return x1/x2;
    }
}
//definimos las propiedades de un object

basico.add=add;
basico.substract=substract;
basico.multiply=multiply;
basico.divide=divide;

//module.exports me permite exportar funcioes, variables, u object
module.exports=basico;

/*
//exportar las funciones hacemos uso de la palabra reservada exports, y est exporta la propiedad de un object no el objeto
exports.add = add;//creamos una variable donde almasenaremos la funcio en este caso se nombre igual que la funcion
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/