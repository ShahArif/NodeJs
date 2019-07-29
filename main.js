console.log("Hello World");

var student = {
   name:'arif Shah',
   email: 'arif@gmail.com',
   designation :'Senior Software Engineer',
   company : 'Ideas2IT Technologies Pvt Ltd'
};


var getName = function(a , b){
   console.log("Hey");
   console.log("You have passed " + a + "and " + b );
   var c = a + b ;
   console.log("Sum of the given numbers is : " + c);
}

getName(5 , 6);

// Arrrow Functions
var getName1 = (a , b)=>{
    console.log("Hey");
    console.log("You have passed " + a + "and " + b );
    var c = a + b ;
    console.log("Sum of the given numbers is : " + c);
 }
 
 getName1(5 , 6);