// Creating Web Server

var http = require('http');

// http.createServer(function(req , resp){   // Normal syntax 
http.createServer((req , resp) => {    // ES 6 Syntax
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('Request came from Url' + req.url + '<br />');
    resp.write('Hello Brother , How are You');
    resp.end();
}).listen(3000);

