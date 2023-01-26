 // LET vs CONST vs VAR
var myname = "Sandeep Kumar";
console.log(myname);
myname = "Sandy";
console.log(myname);

let name = "Sandeep Kumar"; // this will work like var
console.log(name);
name = "Sandy";
console.log(name);

/* const name1 = "Sandeep Kumar"; // it will give error coz we cant change value with const
console.log(name1);            // const means constant value
name1 = Sandy;
console.log(name1); */
 
// let and const are block scope i.e outside of a function block it cant be accessed
/* function biodata(){
    var myfirstName = "Sandeep";
    console.log(myfirstName);
    if(true){
        var mylastName = "Kumar";
        console.log(mylastName);
    }
    console.log(mylastName); // this will also run using var 
}
biodata(); 

function biodata1(){
    let myfirstName = "Sandeep";
    console.log(myfirstName);
    if(true){
        let mylastName = "Kumar";
        console.log(mylastName);
    }
    console.log(mylastName); // this will not run using 'let' coz let doesnt take outside of a block value 
}
biodata1(); */

// template literals (Template strings)
// template literals exactly works like string concatenate using $ symbol
// table of a number using template literals
for(let num = 1; num <= 10; num++){
    let table = 10;
    // console.log(table + " * " + num + " = " + table*num);
    console.log(` ${table} * ${num} = ${table*num}`);
}

// Default parameter
// it is used to initialised default values if no value is passed by function arguments
function mult(a, b=5){
    return a*b;
}
console.log(mult(5)); // 5 will passed to a 

// fat arror function (=> is fat arror symbol)
// in fat arror function we cannot call a function before declared it whereas,in normal func we can call it before declare
// in fat arror function is declared like variable using => sign

const sum = () => {
    let a = 5; b = 6;
    let sum = a+b;
    return `the sum of the two number is ${sum}`;
}
console.log(sum());