// A javaScript strings is zero or more characters written inside quotes. 
// Strings are used for storing and manipulating text

let myName = "Sandeep Kumar";
console.log(myName); 
// length of string
console.log(myName.length); // space will be counted too

// Escape character
let anySentence = "We are the 'Champions!' of this sport.";
console.log(anySentence);
// we can put double quotes in single quotes nd vice versa
let anySentence1 = 'We are the "Champions!" of this sport.';
console.log(anySentence1);

// Finding a string in a string
// indexOf() method returns the index of(position of) the first occurence of a specified
// text in a string.
const myData = "I am a Software Developer";
console.log(myData.indexOf("Software"));
console.log(myData.lastIndexOf("e"));

// searching for a string in a string
// The search() method searches a string for a specified value and returns the position
// of the match.
console.log(myData.search("Developer"));

// Extracting String parts
// there are 3 methods for extracting a part of a string
// slice(start, end)  // syntax
// substring(start, end)
// substr(start, length)

// The slice() Method extracts a part of string nd return the extracted part in a new string
// The method takes 2 parameters: start index nd end index (end index not included)
var str = "Apple, Banana, Lichi, Mango";
let res = str.slice(0,5);
console.log(res);
console.log(str.slice(7,-2)); // minus(-) start from last index

// Q. Display only 50 characters of a string contain more than 50 characters
let tweets = "khehwh kruea kreaku skrg udsh sdkuhvs uisdi fkvb udsfhifvds hjbhjsh";
let myTweet = tweets.slice(0,50);
console.log(myTweet);
console.log(myTweet.length);

// The substring() method is similar to slice method 
// The difference bet substring and slice methid is substring don't take negatives indexes
let res1 = str.substring(0,5);
console.log(res1);
console.log(str.substring(7,-2));  // here it will neglect negative value nd output
  // string counted from index 0 to 6 
// The substr() method is also similar to slice method
// The difference is second parameter specified the length of the extracted part.
// and if we put negative parameter it returns null i.e no any value
let res2 = str.substr(0,5);
console.log(res2);
console.log(str.substr(7,-2)); // it will give null value
console.log(str.slice(-4)); // but this will give last 4 index value of string

// Replacing String content() 
// replace method replaces a specified value with another value in a string.
// replace method doesn't change the string, but it returns a new string
let myBioData = "I am Sandeep Kumar";
let resData = myBioData.replace('Kumar', 'Singh');
console.log(resData);

// Extracting String Characters
// there are 3 methods for extracting string character
// 1. charAt(position)
// The charAt() method returns character at some specified index in a string

// 2. charCodeAt(position) : this method returns the unicode of the character at a 
// specified index in a string. this method returns a UTF-16 code(int b/w 0 to 65535)
// the unicode standard provides a unique number for every character.

// 3. Property access [ ]: it works like array in string to extract data at certain index
//                                   of string
let str1 = "Hello World";
console.log(str1.charAt(0));
console.log(str1.charCodeAt(0));
let lastChar = str1.length-1;
console.log(str1.charAt(lastChar));
console.log(str1[2]); // property access example

// other useful methods
let name = "Sandeep Kumar"
console.log(name.toUpperCase()); // convert all letters of string in uppercase
console.log(name.toLowerCase()); // convert all letters of string in lowercase

// concat() method
let fName = "Sandeep";
let lName = "Kumar"
console.log(fName.concat(" ",lName));
console.log(`${fName} ${lName}`); // better use for string concat
// trim() method : it removes whitespace from both side of a string but not b/w string
var str2 = "    Hello    World     "
console.log(str2.trim()); 

//converting a string to an array 
// A string can be converted to an array with the split() method
var txt = "a,b,c,d,e";
console.log(txt.split(",")); // split on commas
console.log(txt.split(" ")); // split on spaces