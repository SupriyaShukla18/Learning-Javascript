//Scope = where a variable can be accessed in your code.{}
// Global Scope 🌍:
//A variable declared outside all functions/blocks has global scope.
let name="supriya"

function printName()
{
    console.log(name)
}

printName()
console.log(name)

//var doesn't follow the scope if it declared in function or within the scope it can be accessed globally
//  local scope:A variable jo sirf kisi particular area/context ke andar accessible ho, uska scope local hai.
//  two type --> 1.function scope , 2. block scope


function test()
{
  let a=10;//this is accessible overall fxn 
    if(true)
    {

        let b=30;   //but this is accessible only in this block
        var x=20
    }
    console.log(x)
}
console.log(test())


//Function scope and block scope work essentially the same in Node.js and browsers.
//  The main differences appear in how top-level/global variables are handled because the execution environments are different.

//function declaration

function oneSum(num)
{
    return num+1
}
console.log(oneSum(4))

//declaring fxn in variable
const addTwo=function(num){
 return num+2
}

console.log(addTwo(4))