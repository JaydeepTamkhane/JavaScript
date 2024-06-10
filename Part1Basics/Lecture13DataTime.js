let MyDate = new Date()
console.log(MyDate);
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());

console.log();

let updatedDate=new Date(2023,4,12)
// month start from 0 to 11
console.log(updatedDate.toDateString());

let newdate=new Date("10-15-2023")
console.log(newdate.toDateString());

console.log();


let MyStamp=Date.now();
// in the  milisecond
console.log(MyStamp);

console.log(MyDate.getTime());
// to convert in milisecond

// now to both upper value can be compared


console.log();



let newdate2
// newdate2.toLocaleString('default',{
//     weekday:"long",
// })


