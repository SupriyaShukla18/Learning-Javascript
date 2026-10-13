// // // array specific loop

// // const arr=[1,2,3,4,5,6,7,8]

// // for(const num of arr){
// //   console.log(num)
// // }

// // const greeting= "hello supriya"

// // for(const char of greeting)
// // {
// //     console.log(char)

// // }

// //Map: it is the object ,key-value data structure

// const map=new Map()
// map.set('IN',"India")//IN=>key,India=>value
// map.set('US',"usa")
// map.set('IN',"India")//it will not set in the map becoz map only allow unique vlaue and ordered value 
// //console.log(map)// we can not apply the for in anf for of loop becoz it is not iterable

// for(const ele of map)
// {
//     console.log(map)//it will give the output in the form of array
// }

// //for getting the value not in the array form

// // here is syntax
// for(const[key,value]of map)
// {
//     console.log(key,':-',value)//it will return the value in this form
// }

// const object={
//     game1:"NFS",
//     game2:"Spiderman",
//     game3:"subwaySuffer"
// }

// // for(const [key,value] of object)//object is not iterable in this
// // {
// //     console.log('key',':-','value')//error
// // }
// //for of does not work while iterating the object
// //here we will use for in

// for(const key in object)
// {
//     console.log(`${key} shortcut is for ${object[key]}`)
// }

const programming=["js","rb","java","py","cpp"]
for(const key in programming){
    console.log(key)/*return the index(for in loop)*/
     console.log(programming[key])
console.log(programming[key])//return the ele of array
}





