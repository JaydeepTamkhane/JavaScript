// primitive data types
// all primittive data types are call by value a copy is passed
// String ,Nubmer,Boolean,null ,undefined,Symbol,BigInt


const id1=Symbol('123')
const id2=Symbol('123')

console.log(id1===id2);


// Non-Primitive
// always passed by reference
// Arrays ,funtions,Objects


// arrays

const Heros=["Krish","Shaktiman","Flying Jaat"]

// Objects
let MyObj={
    name:"jaydeep",
    city:"dondaicha",
    phoneno:7972466078,
}


const myfunction = function(){
    console.log("namaste duniya")
}




