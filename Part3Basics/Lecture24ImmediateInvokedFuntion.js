// syntax for iife
// its noting but a funtion gets executed as the futnion we define the funtion 



// syntax- (funtion comple body )()


(function funtwo(){
    console.log("hello world");
})()

const funone=function(){
    console.log("namaste duniya");
}();
// ; for stoping the execution of the above funtion as the js don't know where to  stop


(()=>{
    console.log("vadatkam");
})();


((name)=>{
    console.log(name)
})("jaydeep")