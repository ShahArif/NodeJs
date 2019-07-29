var http = require('http');
var fs = require('fs');
var path = require('path');



// http.createServer(function(req , resp){   // Normal syntax 
http.createServer((req , resp) => {    // ES 6 Syntax
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('Request came from Url' + req.url + '<br />');
    resp.write('Hello Brother , How are You');
    resp.end();
}).listen(3000);
    

    // Synchronus Method
    // const data = fs.readFile(__dirname +"/data.txt","utf8",(err, data) =>{
    //     console.log(data);
    // });

    // Async Method
     try {
        const data = fs.readFileSync(__dirname+"/data.txt","utf8",(err, data) =>{
            console.log('Here comes' + data);
        });
     } catch(e){
        console.log(e);
     }
    



console.log("File Ended Successfully Here !!!");