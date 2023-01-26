// object oriented JavaScript
// what is object literal

// object literal is simply a key: value pair data structure that store variables and
// function together in one container. we can refer this as an object

// how to create an object?
let bioData = {
    myName : "Sandeep Kumar",
    myAge : 22,
    getData : function() {
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
console.log(bioData.myName);
console.log(bioData.getData());

// 2nd way of writing where no need to write function after es6
let bioData1 = {
    myName1 : "Sandeep Singh",
    myAge2 : 23,
    getData () {
        console.log(`My name is ${bioData1.myName1} and my age is ${bioData1.myAge2}`);
    }
}
console.log(bioData1.myName1);
console.log(bioData1.getData());

// what is this object
// It contain the current context and can have different values depending on 
// where it is placed.

// For Example 1
// console.log(this); // this will give an empty box.
// it refers to the current context and that is window global object

// ex 2
const obj = {
    myAge3 : 26,
    myName3() {
        console.log(this);
        console.log(this.myAge3);
    }
}
obj.myName3();
// what if we use this inside object: basically current context "of" this change from window
// to that current object where we are using it

// this will not work with arrow function
// ex 3
const obj1 = {
    myAge4 : 26,
    myName4 : () => {
        console.log(this.myAge4);
    }
}
obj1.myName4(); // this will give {} as output

// ex 4
function yourName() {
    console.log(this);
  }
    yourName(); // this will give all object present in window object as output