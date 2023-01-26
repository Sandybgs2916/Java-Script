// array is use to store multiple value at a time in one variable
// var name = new Array; // optional not mandatory
var name = ['sandy', 22, 'maddy', true]; // in javascript we can store all datatypes in one array 

// 1.Traversal of array
console.log(name[1]);
console.log(name[name.length-1]); // print last element
console.log(name.length); // print length of array
for(var i = 0; i < name.length; i++){
    console.log(name[i]);
}
// for in and for of loop
for(let elements in name){ // for in used to print index vaue of array we created 
    console.log(elements);
}
for(let elements of name){ // for of used to print elements present at all the index of array
    console.log(elements);
}
// for each() Array.prototype
name.forEach(function(element, index, array){
    console.log(element + " index : " + index)
});

// 2. searching and filter in an array
// indexOf Array prototype 
// indexOf return index of an element in array nd -1 if it is not found
console.log(name.indexOf("maddy"));
console.log(name.indexOf(22,1)); // 1 here represent it will start searching from 1st index
console.log(name.lastIndexOf("maddy")); // print last index of an element
// includes method : it returns boolean value
// determines whether the array contains a value or not
console.log(name.includes("maddy"));
// find method: it returns the found element in the array, or undefined if not found
// only drawback is, it return only one element
const prices = [200,300,350,400,500];

const findElem = prices.find((currVal) => {
    return currVal < 400;
});
console.log(findElem);
// findIndex() method : it returns the found index in array if an element in the array
// satisfies the testing condition
console.log(prices.findIndex((currVal) => currVal < 400)); 

// filter() method : returns a new array containing all elements which satisfied a condition
// if condition not satisfied it will return an empty array
const newPrice = prices.filter((elem, index) => {
    return elem < 400; 
});
console.log(newPrice); // it will return an array containing all value less than 400

// Array sort() method : 
const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov', 'April'];
const array1 = [2, 34, 23, 123,69,2332];
console.log(months.sort()); // it will sort as per alphabetical order
console.log(array1.sort()); // it will sort as per first digit 
// array CRUD method
// The push() method adds one or more elements to the end of an array
// and returns the new length of the array
const animals = ['pigs', 'goats', 'cow', ];
animals.push('chicken', 'dogs');
console.log(animals);

//The unshift() methods add one or more elements to the beginning of an array nd return new 
// length of the array
animals.unshift('horse', 'monkey');
console.log(animals);