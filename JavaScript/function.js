// function syntax
/* function functionName(){
} */

// function Parameter vs function arguments
// function parameters are the names listed in the function's definition
// function arguments are the real values passed to the function
// sum of two number using function
function sum1(a,b){ // a,b are function parameter
    var total = a+b;
    console.log(total);
}
sum1(20,30);   // 20,30 are function arguments

// function expressions
// function expressions simply means create a function and put it into the variable
function sum2(a,b){
    var total = a+b;
    console.log(total);
}
var funExp = sum2(20,30); 

// return keyword
// when function reaches a return statement, the function will stop executing
function sum3(a,b){
    return total = a+b;
}
var fun = sum3(5,25);
console.log(fun);

// anonymous function: it is declared like variable
// function without any name called anonymous function
var fun2 = function(a,b){
    return total = a+b;
}
console.log(fun2(45,76)); 