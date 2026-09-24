// "Object"
// Object stores data in key-value pairs.
// Keys are also called properties.
// Values can be strings, numbers, arrays, functions, even other objects.
// Object properties can be accessed using:
// Dot notation → obj.name
// Bracket notation → obj["name"]

//Object Literal
// {} syntax is used.
// No new keyword required.
// Most common/simple way to create an object.

  const mySym= Symbol("key1")
const object={//here we use const becoz it will not reassign but iternal values can be changed
    name: "supriya",
    [mySym]:"myKey1", // symbol key
    "full_name": "supriya shukla",//now this is cannot be accessed by dot
    age: 22,
    city: "new Delhi"
}
console.log(object.name)
console.log(object['age'])// here we write the age in ' ' becoz by default in js this is considerd as string thats why
console.log(object["full_name"])
console.log(  object[mySym]) // use the symbol in the object and print it

object[mySym] = "my key"// for changing the value
 console.log(object[mySym])

 object.email="supriyashukla2gmail.com"
 console.log(object.email)

 //if we do not want that somebody change the data of the object just "freeze" 
 //Object.freeze(object)

 object.age=21
 console.log(object.age)

 console.log(object)


 //injecting function into object

 object.greeting1 =function(){
    console.log(`hello object ,this is ${this.name='shristi'}`)// refer the variable from object and thats why use this
 }
 object.greeting2 =function(){
    console.log("hello")
 }
 console.log(object.greeting1())



// Singleton
// Singleton means only one instance of a particular object.
// Useful when you want one shared instance throughout an application.
// Don't confuse object literal with singleton.
//if the object made by constructor that means it is singleton