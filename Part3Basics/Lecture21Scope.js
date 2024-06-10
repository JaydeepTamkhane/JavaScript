// the problem with var is that 
// whereever we declare the var variable inside global or local scope it is availabel as global


if(true){
    var a=10;
}

console.log(`it is even availabel to global scope even though it is declared inside local scope a= ${a}`);


// its just global and local scope video yaar not too much