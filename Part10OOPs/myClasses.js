
class USer{
    constructor(userName,email,password){
        this.userName=userName;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    chageUsername(){
        return`${this.userName.toUpperCase()}`
    }
}


const chai=new USer("chai","chai@gmail.com","123")


console.log(chai.encryptPassword());
console.log(chai.chageUsername());


