const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,10]


// //  1st technique to push
// arr1.push(arr2)
// console.log(arr1);
// // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
// // rather than adding on by one elemment the whole array as a datatypes get pushed



// // 2nd technique
// let arr3=arr1.concat(arr2)
// console.log(arr3);
// // its only able to merge two array at a time and does it perfectly
// // output
// // [
// //     1, 2, 3, 4,  5,
// //     6, 7, 8, 9, 10
// // ]


// // 3rd technique the spread operator ...

// let arr4=[...arr1,...arr2]
// console.log(arr4);
// // it does it perfectly and n number of array cna be merged at a time
// // output
// // [
// //     1, 2, 3, 4,  5,
// //     6, 7, 8, 9, 10
// // ]



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // array with subarrays how to make the single arrays with individual

// let arr5=[1,2,3,[4,5,6,[7,8,9]],[10,11,12]]

// let arr6=arr5.flat(Infinity)
// // makes the single array with individual element and depth of maximum arrays in arrays take as infinity which is easier than defining
// // specific depthh

// console.log(arr6)

// // output
// // [
// //     1,  2, 3, 4,  5,
// //     6,  7, 8, 9, 10,
// //    11, 12
// // ]
  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // how to make something an array
// // Array.from Array.of Array.isArray

// console.log(Array.isArray("jaydeep"))
// // false
// console.log(Array.from("jaydeep"));
// // [
// //     'j', 'a', 'y',
// //     'd', 'e', 'e',
// //     'p'
// // ]
// console.log((Array.of("jadeep")));
// // [ 'jadeep' ]