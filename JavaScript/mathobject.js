// The JavaScript Math object allows you to perform mathematical tasks on numbers
console.log(Math.PI); // it will give pi value
// Math.round(): returns the value of x rounded to its nearest integer
let num = 10.499;
let num1 = 11.76;
console.log(Math.round(num));
console.log(Math.round(num1));
// Math.pow() : This method returns the value of x to the power of y
// Math.pow(x,y) returns the value of x to the power of y
console.log(Math.pow(2,3));
console.log(2**3);
// Math.sqrt(): this methods returns the square root of a number
console.log(Math.sqrt(81));
console.log(Math.sqrt(86));
// Math.abs(): it returns the absolute(positive) value of x
console.log(Math.abs(-55)); // converts negative value in to positive value
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
// Math.ceil(): it returns the value of x rounded to its nearest integer
console.log(Math.ceil(4.51));
console.log(Math.round(4.51)); // ceiling means it's compulsory to increase one number
console.log(Math.ceil(99.1));
console.log(Math.round(99.1));
// Math.floor(): it removes after decimal nd return the same integer before decimal
console.log(Math.floor(4.51));
console.log(Math.floor(9.51));
// Math.min(): used to find the lowest num in a list of argument
// Math.max(): used to find the highest num in a list of argument
console.log(Math.min(0, 150, 30, 20, -8));
console.log(Math.max(0, 150, 30, 20, -8));
// Math.random(): it returns a random number between 0(inclusive) and 1(exclusive)
// it used with Math.floor() to return random integer
console.log(Math.floor(Math.random()*10));
// Math.trunc(): it returns the integer part of a number i.e before decimal value
console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.6));
// if argument is positive number then Math.trunc() is equivalent to Math.floor