function setUserName(userName){
    this.userName=userName;
}


function createUser(userName,email,password){
    // the funtion does not get called directly like this
    // setUserName(userName)

    // as it is getting stored in the setUsername this instance
    setUserName.call(this,userName)
    this.email=email;
    this.password=password;
}


const chai=new createUser("jaydeep","jaydeepTamkahne@gmail.com","1234")

console.log(chai);