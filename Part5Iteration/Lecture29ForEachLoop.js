let number=["a","b","c","d","e"]

number.forEach(function (item){
    // console.log(item)
})


number.forEach((item)=>{
    // console.log(item)
})


number.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

// a 0 [ 'a', 'b', 'c', 'd', 'e' ]
// b 1 [ 'a', 'b', 'c', 'd', 'e' ]
// c 2 [ 'a', 'b', 'c', 'd', 'e' ]
// d 3 [ 'a', 'b', 'c', 'd', 'e' ]
// e 4 [ 'a', 'b', 'c', 'd', 'e' ]




const obj=[
    {
        language:"c++",
        extension:"cpp"
    },
    {
        language:"java",
        extension:"java"
    },
    {
        language:"python",
        extension:"py"
    }
]


// how to acces the object value so here each object actts as a elemment of the array

obj.forEach((item)=>{
    console.log(item.language);
})