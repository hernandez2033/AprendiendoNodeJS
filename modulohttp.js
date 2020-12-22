const { read } = require('fs');
const http = require('http');
const colors = require('colors');

http.createServer(function (req, res) {
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end;
}).listen(2000);

console.log("hola".red);