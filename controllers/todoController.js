data = [
  {item:'get milk'},
  {item:'GO for Walk'},
  {item:'Learn NodeJs'},
];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/todos';


module.exports = function(app){

  app.get('/todo', function(req , res){
    var resultArray =[];
    mongo.connect(url, {useUnifiedTopology: true}, function(err , db){
      assert.equal(null , err);
      var cursor = db.collection('mytodos').find();
      cursor.forEach(function(doc, err){
          assert.equal(null,err);
          resultArray.push(doc);
      },function(){
          db.close();
          res.render('todo',{todos:resultArray});
      });
    })

  });

  app.post('/todo' ,urlencodedParser ,function(req , res){
      var item ={
        title:req.body.title
      };

      mongo.connect(url, {useUnifiedTopology: true}, function(err , db){
        assert.equal(null , err);
        db.collection('mytodos').insertOne(item , function(err , result){
          assert.equal(null, err);
          console.log('item inserted');
          db.close();
        });
      })


    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo' ,function(req , res){

  });
};
