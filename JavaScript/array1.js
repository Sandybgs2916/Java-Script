// The pop() method removes the last elements from an array and returns that element.this 
// method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop()); // this will print last elements of array
console.log(plants);

// The shift() method removes the first element from an array nd returns that removed element
const plant = ['broccoli', 'cauliflower', 'tomato', 'cabbage'];
console.log(plant);
console.log(plant.shift()); // this will print last elements of array
console.log(plant);  
 
//CRUD method
// splice() method : used to adds and/or removes array elements
// Q.1: Add Dec at the end of an array?
// Q.2: What is the return value of splice method?
// Q.3: update march to March(update)?
// Q.4: Delete June from an array?
const months = ['Jan', 'march', 'April', 'June', 'July'];
// sol1:
const newMonth = months.splice(months.length,0,'Dec'); // months.length means insert at last index
// 0 means we are not deleting anything nd Dec means inserting a string Dec
console.log(months);

// sol2:
console.log(newMonth); // it will print an empty array coz splice mostly used for delete
// an element in array nd here we are not deleting any element

// sol3:
const indexOfMonth = months.indexOf('march');
if(indexOfMonth != -1){
const updateMonth = months.splice(indexOfMonth,1,'March'); // here at indexofmonth element
console.log(months);                         // deleted nd March will add there
}else{
    console.log('No such data found');
}

// sol4:
const indexOfMonth1 = months.indexOf('June');
if(indexOfMonth1 != -1){
const updateMonth = months.splice(indexOfMonth1,1); // no insert here so delete june
console.log(months);
console.log(updateMonth); 
}else{
    console.log('No such data found');
}

// Map() method : create a new array from calling a function for every array element
const a1 = [1,4,9,16,25];
// condition num > 9
let newArr = a1.map((currElem,index,arr) => {
    return currElem > 9;
})
console.log(a1);
console.log(newArr);

let newArr1 = a1.map((curElm,index,arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
})
console.log(newArr1);

// challenge time :
// 1. Find the square root of each element in an array?
// 2. multiply each element by 2 and return those element which are greater than 10

//sol1:
let arr = [25,36,49,64,81];
let arrsqr = arr.map((curElem) => {
    return Math.sqrt(curElem);
})
console.log(arrsqr);

// sol2:
let arr2 = arr.map((curelm) => {
    return curelm * 2;
}).filter((curelm) => {
    return curelm > 100;
})
console.log(arr2);
 
// reduce() method : this method flattens array means to convert 3D or 2D array into a 
// single dimension array
let arr3 = [5,6,2];
let sum = arr3.reduce((total, curVal, index, arr) => {
    return total += curVal;
})
console.log(sum);
// how to flatten an array i.e convert 2d or 3d array in one dimensional
const arr4 = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ];
let flatArr = arr4.reduce((tot,curval) => { // just for learning we used here reduce method
    return tot.concat(curval);      // after ECMA 2020 reduce method not in use
})
console.log(flatArr);