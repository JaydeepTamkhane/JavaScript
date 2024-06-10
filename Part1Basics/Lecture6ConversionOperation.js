"use strict"


let Score=33
// its a number
console.log(typeof Score);
// int a number 



// what if we get a number in the for of string and we need to typecast it

let score1="33"
console.log("before the conversion score1 ",typeof score1)
let IntInScore1=Number(score1)

console.log("after the converion score1 ",typeof score1);
// its a number now 
console.log("value in the score1 ",IntInScore1);
// output =33


let score2="33abc"
let Score3=Number(score2)
console.log("the value int the score2 after the conversion in score3 ",Score3)
// NaN = not a number


