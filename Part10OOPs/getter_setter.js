class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value
    }
}


const jaydeep=new User("jaydeep@gamil.com","123abc")
console.log(jaydeep.password);