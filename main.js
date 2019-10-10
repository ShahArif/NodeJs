var express = require('express');

var app = express();


app.get('/' , function(req , resp ){
    resp.send('this is home page');
});

app.get('/blog' , function(req , resp ){
    resp.send('this is Blog page');
});

app.get('/post/:id' , function(req , resp ){
    resp.send('this is post id ' + req.params.id);
});

app.get('/contact' , function(req , resp ){
    resp.send('this is Contact page');
});


app.listen(3002);
