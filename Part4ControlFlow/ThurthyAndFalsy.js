// all the below values aer considered as the false value and all other than this are trure value

// fasle- 0,-0,0n,"",null,undefined,NaN



// true -"0",'flase'," ", [],function(){}



let useremail=[]

if(useremail.length===0){
    console.log("the array is empty");
}

let userid={}
if(Object.keys(userid).length===0){
    console.log("object has no key so its empyt");
}


console.log(false==0)
// true



// nullish coalescing operator (??) null and undefiend


let val1=5??10
console.log(val1);
val1=null??10
console.log(val1);
val1=undefined??15
console.log(val1);

// 5
// 10
// 15

// which is better value is assigned to the variable


