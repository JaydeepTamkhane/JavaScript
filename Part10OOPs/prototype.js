let myHeros =["thor","spiderman"]


let heroPower={
    thor:"hammer",
    spiderman:"sling",


    getSpiderPower:function(){
        console.log(`the spider power is the ${this.spiderman}`);
    }
}

// if you add any method to protottype of object everything will have the 
// property accessible to anything
// as everything in the js is object so share all the propertyies of the object
Object.prototype.jaydeep=function(){
    console.log("jaydeep is present in all objets");
}

heroPower.jaydeep();
myHeros.jaydeep();



// __proto__ 
// i have avoided it dont know why if you wna to see see at the 7hr 45 min 2nd video