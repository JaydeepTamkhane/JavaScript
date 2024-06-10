

function myname(){
    console.log("jaydeep");
}


// myname()



function addingtwonumm(num1,num2){
    if(!(num1)||!(num2)){
        return `undefiend numbers`
    }
    return `addition of ${num1} and ${num2}  = ${num1+num2}`
}

console.log(addingtwonumm(5,2));