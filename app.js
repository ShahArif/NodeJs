var express = require('express');
var app = express();

// Importing controller
var todoController = require('./controllers/todoController');

// setup template engine
app.set('view engine', 'ejs');

// static Files
app.use('/assets',express.static('./public'));

// Fire controller
todoController(app);

// Setting port
app.listen('3000');
console.log('you are listening to port 3000');
