let array= new Array(1,2,3,4)
// console.log(array)
// // arrray is mutable in js
// // can get the element by index value
// //can add the element by push()- it will add ele at last

// array.push(5)
// console.log(array)

// //to delete ele use pop- it will delete ele from last
// array.pop()
// console.log(array)

// // to shift the ele at index 0- front 
// // use unshift(ele)-basicaaly it will shift every ele one by one which is not the optimized sol
// array.unshift(5)
// console.log(array)

// // to remove the element from front
// // use shift()

// array.shift()
// console.log(array)

// console.log(array.includes(11))
// //return boolean type-true/false

// const new_array= array.join();// it will jon the array but the type of this array is "STRING"
//  console.log(new_array)
//  console.log(array)
//  console.log(typeof new_array)

// slice & splice
  
//slice : it will not modify the real array 
//splice : it will modify the real array it change the ele 
 const sliceArray = array.slice(1,3)
 console.log(sliceArray)
 console.log(array)

 const spliceArray= array.splice(1,4)
 console.log(spliceArray)
 console.log(array)