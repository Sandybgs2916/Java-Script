console.log('Hello world');

/* values and variables in javaScript */

var myName = 'Sandeep Kumar';
console.log(myName); 

var myAge = 20;
console.log(myAge);

var imSandeep = true;
console.log(imSandeep); 
 
// type of operator
console.log(typeof(myName));
console.log(typeof(myAge));
console.log(typeof(imSandeep));
// DataTypes Practics 
console.log( 10 + "5");
console.log( 9 - "5"); // bug of javascript as number and string can't be substracted
console.log( "Java" + "Script");
console.log( "Java " + "Script");
console.log( " " - " ");
console.log( " " - 0);
console.log( "Sandy" - "Kumar");
/* console.log( true + true);
console.log( true + false);
console.log( false + true);
console.log( false - true);
console.log( false - false);
console.log( true - true);
console.log( true - false); */

// Interview question 1 
// Difference between null vs undefined?

 /* var useless = null;
 console.log(useless);
 console.log(typeof(useless)); */

 // 2nd javaScript bug as null value can't be object data type

 /* var imStandBy;
 console.log(imStandBy); 
 console.log(typeof(imStandBy)); */
 // interview q2
 // what is NaN?
 var myPhoneNumber = 9875543567;
 var name = "sandy";
 console.log(isNaN(myPhoneNumber));
 console.log(isNaN(name));

 if(isNaN(name)){
     console.log("plz enter valid phone no");
 }
 // global variable
var data = 200;
function a(){
    console.log(data);
}
function b(){
    console.log(data);
}
a();
b(); 