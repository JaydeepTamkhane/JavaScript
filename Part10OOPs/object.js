// you can see the constructor function is acting like a class

function createUser(userName,score){
    this.userName=userName;
    this.score=score;


    // optional as it implicityly return
    return this;
}


createUser.prototype.increement=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`the score of the user ${this.userName} is ${this.score}`);
}


const userOne=new createUser("jaydeep",100);
const usertwo =new createUser("piyush",100);

userOne.printMe()