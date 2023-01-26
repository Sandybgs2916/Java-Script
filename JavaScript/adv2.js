// function currying
function sum(num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1, num2, num3);
            console.log(num1 + num2 + num3);
        }
    }
}
sum(5)(3)(8);

// writing same above function program using fat arror function
const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum1(6)(7)(9);

// CallBack Hell: when we create multiple callback with a function is called callback hell
setTimeout(() => {
    console.log(`1 work is done`);
    setTimeout(() => {
        console.log(`2 work is done`);
        setTimeout(() => {
            console.log(`3 work is done`);
            setTimeout(() => {
                console.log(`4 work is done`);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// JSON 
// JSON.Stringify turns a JavaScript object into JSON text and stores that JSOn text in a String
var my_object = { key_1: "some text", key_2: true, key_3: 5};
var object_as_string = JSON.stringify(my_object);
console.log(typeof(object_as_string));
console.log(object_as_string); // output converted in json

// JSON.parse turns a string of JSON text into a JavaScript object
var object_as_string_as_object = JSON.parse(object_as_string);
console.log(typeof(object_as_string_as_object)); 
console.log(object_as_string_as_object);