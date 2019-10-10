var http = require('http');
var staff = require('./public/data/staff.json');


var server = http.createServer((req , resp) => {    
    if(req.url === '/'){
        resp.writeHead(200,{"context-type":"text/json"});
        resp.end(JSON.stringify(staff));
    }else if(req.url === '/reactjs'){
        var data = staff.filter(function(item){
            return item.language === "reactjs"
        })
        resp.writeHead(200,{"context-type":"text/json"});
        resp.end(JSON.stringify(data));
    }
   
});

server.listen(3003, function(){
    console.log('Listening on Port 3000');
});

