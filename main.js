
// Setting interval per 3 seconds
// var time = 0;
// var timer = setInterval(function(){
//     console.log('hey Dude');
//     time+=1;
//     if(time >= 6){
//         clearInterval(timer);
//     }
// },3000);

// Setting time out after 3 seconds
// setTimeout(function(){
//     console.log('hey Dude');
// },3000)


// Directory

// console.log(__dir , 'Directory');

// Creating Directory

var fs = require('fs');
// Creating Directory
fs.mkdirSync('Test', function(){
  console.log('woreking');
});
// creating file inside the Directory
  var content = 'hey read me';
  fs.writeFileSync('./Test/test.txt',content);
  fs.writeFileSync('test2.txt',content);

var text = fs.readFileSync('./Test/test.txt','utf-8', function(err , data){
    console.log(data);
});


// remove Directory

fs.unlink('test2.txt');
