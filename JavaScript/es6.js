// Array Destructuring
const myBio = ['Sandy', 'Kumar', 23];
// let myFName = myBio[0];
// let myLName = myBio[1];
// let myAge = myBio[2];
// console.log(myFName); // old way of getting array index data

// Destructuring ways of getting index value
let [myFName,myLName,myAge] = myBio;
console.log(myFName);

// we can add values too
// let [myFName,myLName,myAge, myDegree='Btech'] = myBio;
// console.log(myDegree); this will give myDegree index value.

// Object Destructuring
const myData = {
    fName : 'Sandeep',
    lName : 'Singh',
    age : 22
}
// let age = myData.age;  old method of getting object oriented data
// console.log(age);
let {fName,lName,age} = myData; // in oops we use curly braces i.e {}
console.log(age);
 
// Object Properties
// no need to write key and value, if both are same
let myName1 = "Rohit";
let myAge1 = 23;
/* const mybio1 = {
    myName1 : myName1,
    myAge1 : myAge1
} */ 
const mybio1 = {myName1,myAge1} // above can be written like this as both key nd value same
console.log(mybio1);

// spread operators: it is used to extract nd add all data of an array into an another array 
// with some other data. it is used using three dot sign i.e '...'
const colors = ['red', 'green', 'black', 'white'];
const favColors = [...colors, 'yellow', 'pink'];
console.log(colors);
console.log(favColors); 
// ES8 features
// String padding: used to add padding in string
// Object.values()
// Object.entries()

// below padding will be done in console section of webpage
/* const message = "Sandy";
let mymsg = "Sandy".padStart(5); // 5 space entered at start
let mymsg1 = "Sandy".padEnd(6); // 6 space will be entered at the end
mymsg() // calling 
mymsg1() */

const person = {name: 'Freddy', age: 87};
console.log(Object.values(person));  // it gives only value as output
console.log(Object.entries(person)); // it gives key value pair
// spread method in object
const sperson = {...person, degree : "Mca"};
console.log(sperson);

// flat() : it is used to create one dimensional array from multidimensional array
const arr = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8', 'zone_9'],
];
console.log(arr.flat());
const arr1 = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', ['zone_8', 'zone_9']],
];
console.log(arr1.flat(Infinity));

// object.fromEntries(): 
const brr = {name : 'sandy', age : 86};
const arrObj = Object.entries(brr); // this will convert into array
console.log(Object.fromEntries(arrObj)); // this will again convert into object

// bigInt
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
// if we want to use number greater than max safe number then we will use 'n' at last of num
const newNum = 90007199254740991n + 12n;
console.log(newNum);
console.log(typeof(newNum));