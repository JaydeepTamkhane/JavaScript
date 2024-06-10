

let arr=[1,2,3,4,5]


// iterator is the Element
for (const element of arr) {
    // console.log(element) ;
}

arr.forEach(element => {
    // console.log(element);
});


let map=new Map()
// ORDER OF INSERTIOIN IS INTACT
map.set("IN","INDIA")
map.set("USA","UNITED STATE OF AMERICA")
map.set("PK","PAKISTAN")


// console.log(map)



for (const iterator of map) {
    // console.log(iterator)
}

for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`)
}



// objects not iterator on forof loop


const myobj={
    name1:"jadyeep",
    name2:"unde",
    name3:"udavant"
}


for (const key in myobj) {
    // console.log(key," := ",myobj[key]);
}
// name1  :=  jadyeep
// name2  :=  unde
// name3  :=  udavant



let NumInNumbers=[1,2,3,4,5,6]

for (const num in NumInNumbers) {
    console.log(NumInNumbers[num]);
}


  