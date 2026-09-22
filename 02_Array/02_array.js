// to add the two array use "concat"
// and store this in new array

const array1= [1,2,3,4,5]
const array2=[5,6,7,8,9]

const array3= array1.concat(array2)//in concat we only add two array thats why mostly use spread
console.log(array3)

const array4= [...array1,...array2]// it is spread
console.log(array4)
console.log(typeof array4)

//if any unfamiliar situation is there where array is under the array and also array is  in another array
// use "flat" it will flat() is an Array method used to flatten nested arrays.
//By default, it flattens the array by 1 level.
//It returns a new array and does not modify the original array.

const anotherArray=[2,3,[455,566],45,[34,[435,54,[4545]]]]
const newAnotherArray= anotherArray.flat(Infinity)
console.log(newAnotherArray)

// Array.isArray()
//Array.isArray() checks whether a value is an array or not.
//It returns true or false.

console.log(Array.isArray("supriya"))

//Array.from()
//Array.from() is used to create a new array from an "iterable or array-like object".
//Commonly used with strings, NodeLists, Sets, etc.

console.log(Array.from("supriya"))//this is iterable bocz this is string and can iterate

//but an object like
 console.log (Array.from({name:"supriya"}))//this will return[] bcoz there is no length and thats
 // why it is not iterable in js the length of an object is defined explicitly


 //Array.of() it make the array of the given value

 let score1=11
 let score2 =33
 console.log(Array.of(score1,score2))
 
