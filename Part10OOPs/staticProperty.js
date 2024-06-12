class User{
    constructor(userName){
        this.userName=userName;
    }

    logme(){
        console.log(`userNmae ${this.userName}`);
    }

    // static function are not accessible by the objects
    static createId(){
        return "123";
    }
}

const chai=new User("chai")
chai.logme();
// console.log(chai.createId());