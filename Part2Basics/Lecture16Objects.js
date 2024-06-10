// Singleton


// objects literals

// object creation using creation
// Object.create

// how to make object
// all the object key  and value pair both are treated as a string

// we need to declare the symbol outside the object first
const mysym=Symbol("key1");


const user={
    name:"jaydeep",
    age:20,
    locationn:"Dondaicha",
    email:"jaydeeptamkahne@gmail.com",
    islogin:"true",
    lastlogindays:["monday","wednesday"],

    // its not special way but not commonly used to make key value pair

    "full name":"jaydep lilachnad tamkhane",
    // thier is only one way to access it


    // how to make a symbol a data member
    [mysym]:"key1",
}

// // two wasy to access the the object members

// console.log(user.email);
// // orthodox way
// console.log(user["email"]);
// // also can be accessed like this


// // this is the only way to access it no other wayv
// console.log(user["full name"]);




// // how to use symobol
// console.log(user[mysym]);



// // how to upadte the values of the object and freeze then from further updation
// console.log(user);
// console.log();
// // old one without updation and freeeze

// user.email="snehatamkhane@gamil.com"

// console.log(user);
// console.log();
// // is updated


// Object.freeze(user)
// user.email="shekhar@gmail.com"
// console.log(user);
// // not got upadated



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// how to make a funion in object
// syntax-
// object_name.funtion_name=function(){
//     function_body
// } 


user.greeting= function(){
    console.log(`hi ${this.name} , from user`);
}

// console.log(user.greeting());
// output
// hi jaydeep , from user
// undefined



user.greeting()
// output
// hi jaydeep , from user