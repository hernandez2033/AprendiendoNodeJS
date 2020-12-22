const http = require('http');
const colors = require('colors');
/* esta es una forma de levantar un servidor

http.createServer(function (req, res) {
    //respond o respuesta de manera agregada es res
    //requires o peticion de manera agregada es req
    res.writeHead(200, {'content-type': 'text/html'});//escritura de cabesera, tipo de contenido en este caso htmly tipo de respuesta
    //res.writeHead(404, {'content-type': 'text/plain'});//definimos el tipo de testo, testo plano, damos un estado de respuesta 404 
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();
}).listen(3000);
*/

const gestorserver = function (req, res) {
    //respond o respuesta de manera agregada es res
    //requires o peticion de manera agregada es req
    res.writeHead(200, {'content-type': 'text/html'});//escritura de cabesera, tipo de contenido en este caso htmly tipo de respuesta
    //res.writeHead(404, {'content-type': 'text/plain'});//definimos el tipo de testo, testo plano, damos un estado de respuesta 404 
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();
}
const server = http.createServer(gestorserver);

 server.listen(3000, function(){
     console.log('Server on port 3000');
 });
//Nota codigi de estado http buscar informacion