// Creating Web Server

var http = require('http');
var fs = require('fs');
var path = require('path');



// http.createServer(function(req , resp){   // Normal syntax 
http.createServer((req , resp) => {    // ES 6 Syntax
    if(req.url === "/"){
        fs.readFile('./public/index.html',"UTF-8",function(err , data){
            resp.writeHead(200,{'content-type':'text/html'});
            resp.end(data)
        });
    } else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,'public',req.url);
        var fileStream = fs.createReadStream(cssPath ,"UTF-8");
        resp.writeHead(200,{"ContentType":"text/css"});
        fileStream.pipe(resp);
    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname,'public',req.url);
        var fileStream = fs.createReadStream(imagePath);
        resp.writeHead(200,{"ContentType":"image/png"});
        fileStream.pipe(resp);
    }else{
        resp.writeHead(404, {"Content-Type":"text/html"});
        resp.end("No Page Found");
    }
   
}).listen(3003);

