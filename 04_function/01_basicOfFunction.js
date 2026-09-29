// function sayMyName(){
//     console.log('s')
//     console.log('u')
//      console.log('p')
//      console.log('r')
//       console.log('i')
//        console.log('y')
//         console.log('a')
// }
// sayMyName()

// function addingTwoSum(num1,num2){
//     const result= num1+num2
//     return result}

// const result=addingTwoSum(3,5)
// console.log(result)


function isLogged(username)
{ 
    if(!username)// if(username===undefined)
    {
        console.log("please enter the username")
        return
    }
    return`${username} just logged in`
}

console.log(isLogged())