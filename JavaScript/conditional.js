var tomr = 'rain';
if(tomr == 'rain'){
    console.log('take a raincoat');
} else {
    console.log('dont take raincoat')
}
// challenge time
// write a program that for a given year is leap year or not
var year = 2020;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ){
    console.log("the year " + year + " is a leap year");
}
else{
    console.log("the year " + year + " is not a leap year");
}
// falsy value in javascript
// 0,"",undefined,null,NaN is falsy in javascript
// if we put falsy value in if condition then by default our else condition will be excuted
if(score = 0){
    console.log("yey we loss the game");
}else{
    console.log("omg, we won the game");
}
// conditional(ternary) operator
// the conditional (ternary) operator is the only javaScript operator that takes three operands
// syntax : variablename = (condition) ? value1:value2 i.e if value1 is right then it'll run else value2 will run
 var age = 19;
 console.log((age >= 18) ? "you can vote" : "you can't vote"); 
 // find the area of circle, triangle, and rectangle?
/* var area = "triangle";
 var PI = 3.14, l=5, b=4, r=3;
 if(area=="circle"){
     console.log("the area of the circle is : " + PI*r**2);
 }else if(area=="triangle"){
    console.log("the area of the triangle is : " + (l*b)/2);
}else if(area=="rectangle"){
    console.log("the area of the rectangle is : " + (l*b));
}else{
    console.log("please enter valid data");
    } */

    // switch statement 
    var area = "triangle";
    var PI = 3.14, l=5, b=4, r=3;
    switch(area){
        case 'circle':
            console.log("the area of the circle is : " + PI*r**2);
            break;
        case 'triangle':
            console.log("the area of the triangle is : " + (l*b)/2);
            break;
        case 'rectangle':
            console.log("the area of the rectangle is : " + (l*b));
            break;
        default:
            console.log("please enter valid data");
    }
    /*
    // while loop
    var num = 10;
    while(num >= 0){
        console.log(num);
        num--;
    }
    var n = 0;
    while(n <= 10){
        console.log(n);
        n++;
    } */
    // do while loop
    var n = 0;
    do{
        console.log(n);
        n++;
    }
    while(n < 11);
    // for loop
    for(var num = 6; num <= 10; num++){
        console.log(num);
    }
    // program to print table for given number
    var table = 8;
    for(var num = 1; num <= 10; num++){
        console.log(table + " * " + num + " = " + table*num);
    }