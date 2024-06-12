const user={
    username:"jaydeep",
    count:8,
    isLoggedIn:true,
    getDetails:function(){
        console.log(`got all the detail of user ${this.user}`)
    }
}


// console.log(user);


// this is the constructor funtion
function User(username,count,isLoggedIn){
    // as we have not used any new keyword so here this represents the global object
    this.username=username;
    this.count=count;
    this.isLoggedIn=isLoggedIn;

    // this return statement is optional 
    // as thier is implicit return by default for constructor funtion
    return this;
}

// new keyword avoids overwritting by created new instance

let userOne=new User("hitesh",8,false);
let userTwo=new User("piyush",10,true)

console.log(userOne);
console.log(userTwo);



