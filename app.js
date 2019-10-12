var express = require('express');

var app = express();
app.set('view engine','ejs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets', express.static('assets'));




app.get('/' , function(req , resp ){
    // resp.send('this is home page');
    // resp.sendFile(__dirname + '/index.html');
      resp.render('index' ,{ person: req.params.name,qs:req.query})
});
app.get('/login' , function(req , resp ){
    resp.render('login');
});

app.post('/dashboard' , urlencodedParser, function(req , resp ){
      console.log(req.body);

      resp.render('dashboard' ,{ data: req.body})
});
app.get('/profile/:name' , function(req , resp ){
   data ={
      name:'arif',
      age: 26,
      email:'arif@ideas2it.com',
      hobbies:['cycling','reading','swiming'],
   }
    resp.render('profile' ,{ person: req.params.name,qs:req.query, data:data})
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
