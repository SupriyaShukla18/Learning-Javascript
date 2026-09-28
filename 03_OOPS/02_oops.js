//Here is the second way to declare the object with use of constructor
 //that is singleton method
 // Singleton
// Singleton means only one instance of a particular object.
// Useful when you want one shared instance throughout an application.
// Don't confuse object literal with singleton.
//if the object made by constructor that means it is singleton

//const user = new Object();//singleton
const user={// non singleton
   email : "surpiyashukla@gmail.com",
      username:{                        // object in object 
        firstname:"supriya",
        lastname: "shukla"
     }
} 

// // console.log(user.username.lastname)   // can get the value of the object which is inside the nested object

// // to assign the  element
// const user1 ={1:"a",2:"b",3:"c"}
// const user2 ={4:"a",5:"b",6:"c"}
// const user3 ={7:"a",8:"b",9:"c"}

// const user4 = Object.assign(user1,user2,user3)//{} - is the target & user1,user2 will act as a source ,the source value stored in target
// // if the {} parenthesis is't there so the first object became the target and source will store in that like user1 became target and user2 & user3 became source
// console.log(user4)

// // the object can also be assign by spread way

// const user5={...user1,...user2,...user3}//spread
// console.log(user5)

// //to store the object in array

const array=[
    {id:1001,
      mail: "supriya@gmail.com"
    },

    {
        name:"supriya",
        location:"new Delhi"
    }
]

console.log(array[1].name)

//for printing keys 
console.log(Object.keys(user))//it will put the keys in array and then print

//for printing the values
console.log(Object.values(user))//it will also put the vlaue in the array and then print

//for putting every key and value in array
console.log(Object.entries(user))// first ele in array is key and second will be value
  

//to know that the object conatains that property or not 
console.log(user.hasOwnProperty('supriya'))//property means keys