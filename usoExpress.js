const express = require ('express');//importamos el modulo express que se instalo con npm i express
const colors = require('colors');//importamos el modulo color que se instalo con npm install colors
//creamos la conexiones al servidor
const server = express();

//usamos el metodo get para definir la ruta y el uso de un res y req
server.get('/',function(req, res){//al pasar los parametro req y res deve de ser en el orden que se muestra sino dara error
    res.send('<h1>Hola mundo desde Espress</h1>');
    res.end();
});


server.listen(3000, function(){
    console.log('server on por 3000'.yellow);
});

