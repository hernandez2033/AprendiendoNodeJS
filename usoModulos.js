//importando modulos
const os = require('os');//uso del modulo os 
const fs = require('fs');// modulo File system, nos permite tranaja con los archivos del sistema operativo

console.log(os.platform());//para identificar en que plataforma estamos trabajando con el metodo plataform() de modulo os
console.log(os.release());//para saver la vercion de mi sistema operativo
console.log('memoria total ', os.totalmem(), 'bytes');//memoria ram total
console.log("memoria libre "+os.freemem()+" bytes");//memoria libre o sin usar
//Nota: se pued concater ya sea usandio , o + 

//codigo asincreino , a la funcion se le conose colback

fs.writeFile('./texto.txt', 'primera linea en el archivo creado', function(err){
    if(err){
        console.log(err);
    }
    console.log("Archivo creado");
});

//Nota: asincrono significa que mientras realiza una funcion el programa se sige ecutanto

//leer el archivo
fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }

    console.log(data.toString());//usamos el metodo toString para combertir el resultado data en texto

});