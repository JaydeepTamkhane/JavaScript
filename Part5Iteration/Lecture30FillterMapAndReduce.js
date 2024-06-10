// foreach does not return any loop
let alpha=["a","b","c","d","e"]



let numbers=[1,2,3,4,5,6,7,8,9,10]




// it return as array of the condition values

let newnum=numbers.filter((item)=>{
    return item>4
}) 


// console.log(newnum);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// it does both the work of fforeach as well as fillter


// it iterates over whole array by default
let mynums=numbers.map((item)=> item+10)


// console.log(mynums);


let chainmap=numbers.map((item)=>item*10).map((item)=>item+1).filter((item)=> item>40)

// console.log(chainmap);




// Reduce

let nums=[1,2,3,4,5]

let initialvalue=0;

let totalsum=nums.reduce((accumulator,currentvalue)=>{
    // console.log(`accumulator =${accumulator}  currentvalue =${currentvalue}   `);
    return accumulator+currentvalue;
})


// synax

// console.log(totalsum)



const courses=[
    {
        course:"dsa",
        courseprice:3200
    },
    {
        course:"webdev",
        courseprice:4200
    },
    {
        course:"lld",
        courseprice:1500
    }
]


let totalpriceofcourse=courses.reduce((acc,courses)=>{
    return  acc+courses.courseprice
},0)
 
// the above syantax is to much impport just remember the pace of initial value of acc as zero
console.log(totalpriceofcourse)
