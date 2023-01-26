// Higher order function(Hof):function which takes another function as an argument is called 
// higher order function
// Callback Function: function which get passed as an argument to another function is called
// callback function.
// we need to create a calculator using higher order function and callback function
const add = (a,b) => {
    return a+b;
}
const subs = (a,b) => {
    return Math.abs(a-b);
}
const mult = (a,b) => {
    return a*b;
}
const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
}
console.log(calculator(5,2,add)); // here we're calling add function as an argument
console.log(calculator(5,2,mult));// here calculator is hof nd add,mult are callback function

// 1. Hoisting in JavaScript is a mechanism where we console variables nd try to get output
// before it's declaration and initialisation.
console.log(myName);
var myName;        // this will give undefined as output
myName = "Sandeep"; // instead of var if we use let then it will give error as output

// 2. what is scope chain and lexical scoping in JavaScript
// the scope chain is used to resolve the value of variable names in JS.
// Lexical scoping means now the inner function can get access to their parent functions
// variables but the vice-versa is not true.
let a = "Hello guys!"; // global scope
const first = () => { // parent function
    let b = " How are you?"
    const second = () => { // inner or child function
        let c = " Hii, I am fine"
        console.log(a+b+c);
    }
    second();
}
first();
// 3. Closures in JavaScript
// A closure gives access to inner function so that it can access both parameter and 
// argument of outer function.
function outerFun(a) {
    let b = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(`the sum of the two number is ${sum}`);
    };
    innerFun();
}
outerFun(5); // passing value 5 to parameter a

// "use strict" mode
x = "vinod"; // this will give vinod as output but if we uncomment and "use strict" then it 
console.log(x); // will give error output as this is not the correct way to declare variable 

// Example: Synchronous JavaScript
const fun2 = () => {
    console.log(`Function 2 is called`);
}
const fun1 = () => {
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is again called`);
}
fun1();
// Example: ASynchronous JavaScript
const fun12 = () => {
    setTimeout (() => {
        console.log(`function 12 is called`);
    }, 2000);
}
const fun11 = () => {
console.log(`Function 11 is called`);
    fun12();
    console.log(`Function 11 is again called`); // here fun12 call after 2 sec of fun11 call
}
fun11();