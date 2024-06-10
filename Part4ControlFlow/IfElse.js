// if else synax which we already know


// new thing to learn is typecheck operator === and comparision operator diffference

if(2===2){
    console.log("first block");
}


if(2==="2"){
    console.log("second block");
}

if(2==2){
    console.log("third block");
}


if(2=="2"){
    console.log("fourth block");
}

// only second block will not get executed as it also checks the data type pf the comparing attributives



// ternary operator

let price=120;

price>=100?console.log("price greater than 100"):console.log("price is less than 100");