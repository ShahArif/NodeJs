// Creating Web Server
// To use the nodemon we have to install nodemon package 
// npm install -g nodemon

var http = require('http');
http.createServer((req , resp) => {    // ES 6 Syntax
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('Request came from Url' + req.url + '<br />');
    resp.write('Hello Brother , How are You');
    resp.write('<br> Hey Node Mon is working dude');
    resp.end();
}).listen(3000);
