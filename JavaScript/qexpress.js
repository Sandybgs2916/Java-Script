// Question practice of expressions and operators

// Q1 what will be the output of 3 ** 3 and 3 ** 5
// Q2 what will be the output when we add a number and a string
// Q3 write a program to swap two numbers without third varible
// Q4 write a program to swap two number with third varible

// sol1
// ** called exponentiation operator
console.log(3**3); // means 3*3*3 = 27
console.log(3**5); // means 3*3*3*3*3 = 243
//sol2
console.log(10 + "50");
console.log(10 + "Sandy");
// sol3
var a = 5;
var b = 10;
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // 15-5 = 10
console.log(a);
console.log(b);
// sol4
var x = 5;
var y = 10;
var temp = x;
x = y;
y = temp;
console.log(x);
console.log(y);
// difference between == nd ===
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2); // true
console.log(typeof(num1===num2)); //  boolean   