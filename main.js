var http = require('http');
var fs = require('fs');


const events = require('events');
const  event = new events.EventEmitter();

//  Approach 1
// event.on('something',(param1, param2)=>{
//     console.log('First Event called with '+ param1 + " Second arg as number is " + param2);
// });

// event.emit('something','This message is passed as parameter',25);


// Approach 2
const first_event = function(n1 , n2){
    console.log('First Event ' , n1+n2);
    event.emit('multiply',2,5);
}

const second_event = function(n1 , n2){
    console.log('Second Event' + n1*n2);
    
}

event.on('add',first_event);
event.on('multiply',second_event);
event.emit('add',2,5);



// http.createServer(function(req , resp){   // Normal syntax 
http.createServer((req , resp) => {    // ES 6 Syntax
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('Request came from Url' + req.url + '<br />');
    resp.write('Hello Brother , How are You');
    resp.end();
}).listen(3000);

