const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is completed");
    // we need to call resolve funtion to contect the then with the promise
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

console.log();
console.log();

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    // we need to call resolve funtion to contect the then with the promise
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "jaydeep",
      email: "jaydeeptamkahne@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "jaydeep", passward: "1234" });
    } else {
      reject("Error has occured");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(function(){
    console.log("finally the promisefour is either resolved or rejected");
  })



const promiseFive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username:"sneha",email:"snehatamkhane@gmail.com"});
    }else{
      reject("ERROR has occured for sneha")
    }
  },1000)
})



async function cosumePromiseFive(){
  try{
    let response=await promiseFive;
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}

cosumePromiseFive()


async function getUser(){
  try{
    let response =await fetch('https://api.github.com/users/JaydeepTamkhane');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data= await response.json()
    console.log(data);
    console.log(data.login);
  }
  catch(error){
    console.log("E: ",error);
  }
}

// getUser()



fetch('https://api.github.com/users/JaydeepTamkhane').then(function(user){
  let data=user.json()
  return data;
}).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("the eroor has occured ",error);
}).finally(function(){
  console.log("either the fectch request is resolved or rejected");
})

