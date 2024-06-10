// no major difference but the first one is the sinngleton object and thhe second one is
// non singleton object

// const tinderuser=new Object();
const tinderuser={}

tinderuser.id="jd123"
tinderuser.name="jaydeep"
tinderuser.bool="true"

// console.log(tinderuser);


const facebookuser={
    email:"jau@gmail.com",

    // any number of objects can be nested between any object
    fullname:{
        partname:{
            firstname:"jaydeep",
            secondname:"lilachand",
        }
    }
}

// console.log(facebookuser.fullname.partname.firstname);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// most usefull concept 
// how to merge two or more ojects


const obj1={
    1:"a",
    2:"b",
}

const obj2={
    3:"c",
    4:"d",
}


// const obj3={obj1,obj2};
// console.log(obj3);

// output
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// smae issue as the mergin two arrays not the individual elements are mergede rather two objects acts as a member


// const obj3=Object.assign(obj1,obj2)

// console.log(obj3)
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1);
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// // syntax-
// // object.assign(target,all objects);
// // the all obbjects get inserted in the target obbject and the target object gets modified and returns a object 



// 2nd way to do it

// const obj3=Object.assign({},obj1,obj2)
// // now the {} empty object got modified not the anyother
// console.log(obj3)
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




// rather than doingg this much stuff use spredd operator


// const obj3={...obj1,...obj2}
// console.log(obj3)
// // output
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// we can access the values and keys in the form fo arrays


console.log(Object.keys(tinderuser));
console.log();
console.log(Object.values(tinderuser));

// output in the from of array
// [ 'id', 'name', 'bool' ]

// [ 'jd123', 'jaydeep', 'true' ]









