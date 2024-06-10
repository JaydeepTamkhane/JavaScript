 "use strict"


//  string concatetion
let Name="Jaydeep"
let Age=20


// String interpolation
console.log(`Hello, my name is ${Name} and age is ${Age}`)
// its not single quote its the backtick on the ~ icon berfore 1


// another way of declaring the string
// whhich is has the inbuild method which are very helpful
const GameName=new String('Unicorn  hello ')
console.log(GameName)
console.log(GameName[0])
// accessing index




console.log(GameName.length);
console.log(GameName.toUpperCase())
// it does not change the original value as it is the primitive data types
console.log(GameName.charAt(5))

console.log(GameName.indexOf('n'))
// first occurence of the character

console.log(GameName.substring(0,5))

console.log(GameName.slice(1,6))



console.log(GameName.trim())

console.log(GameName.replace('n','j'))

console.log(GameName.includes('Unicorn'))


console.log(GameName.split(" "))







