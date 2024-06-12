class User{
    constructor(username){
        this.username=username;
    }

    loggme(){
        console.log(`userName is ${this.username}`);
    }
}



class Teacher extends User{
    constructor(username,email,password){
        // super keyword is used to access the parent class
        super(username);
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added by  ${this.username}`);
    }
}


const chai=new Teacher("chai","chai@gmail.com","123")

chai.addCourse()
chai.loggme()


const masalaChai=new User("jaydeep");

masalaChai.loggme()


console.log(chai instanceof Teacher);
console.log(Teacher instanceof User);