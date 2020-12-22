const http = require('http');

http.createServer(function (req, res) {
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();//es un a funcion que nos permite finalizar la respuesta
}).listen(3000);
