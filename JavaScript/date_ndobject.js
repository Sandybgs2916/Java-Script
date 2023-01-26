// JavaScript Date objects represents a single moment in time in platform independent format.
// Date objects contain a number that represents milliseconds since 1 january 1970 UTC
// Date objects are created with the new Date() constructor
// there are mainly four ways to create a new date objects
// new Date() 
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)   we cannot avoid months section
// new Date(date string)
let currDate = new Date();
console.log(currDate);  // we will gate current date
console.log(new Date().toLocaleString()); // it gives current date as well as time
console.log(new Date().toString());  // it gives perfect time i.e date, time, day all
// toString() use for extracting perfect time
// Date.now() method returns the numeric value corresponding to the current time number of
// milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Date.now());
// javascript counts months from 0 to 11. i.e jan is 0 nd dec is 11
var d = new Date(2022, 10, 11, 10, 33, 30, 0);
console.log(d.toLocaleString());
// month and year is compulsory
console.log(new Date(2022));  // this will give 1/1/1970 coz we didn't put month 
// new Date (dateString): it creates a new date object from a date string
var d1 = new Date("November 11, 2022 18:00:00");
console.log(d1.toLocaleString());
// new Date(milliseconds): this methods give exact time in milliseconds elapsed from
// the date 1/1/1970
console.log(new Date(1709574531435));
// Dates method
const curDate = new Date();
// how to get individual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());
// how to set the individual date
console.log(curDate.setFullYear(2022));
// the setTime() method returns the number of milliseconds since january 1, 1970
// the setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
console.log(curDate.setMonth(10));
console.log(curDate.setDate(5));
// Times method()
const curTime = new Date();
console.log(curTime.getTime());
// the getTime() method returns the number of milliseconds since january 1, 1970
console.log(curTime.getHours());
// the getHours() method returns the hours of a date as a number(0-23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());
// how to set the individual time
let curTime1 = new Date();
console.log(curTime1.setHours(5));
console.log(curTime1.setMinutes(5));
console.log(curTime1.setSeconds(5));
console.log(curTime1.setMilliseconds(5));
// practice time very important
console.log(new Date().toLocaleTimeString()); // to get only time
console.log(new Date().toLocaleDateString()); // to get only date
console.log(new Date().toLocaleString());  // to get both date and time