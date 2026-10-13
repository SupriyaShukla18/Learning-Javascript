const array=["java","c++","c","py","ruby"]


//initialising the fxn within the forEach
// array.forEach(function (item){  //callback function this function does not have any name and give the name of any parameter like items ,val in the paranthesis this will iterate each ele 
//     console.log(item)
// })

// array.forEach((val)=>{
//     console.log(val)
// })//by arrow function callback thats not write the name of the function

//can also pass the the fxn directly in the forEach

// function printMe(item)
// {
//     console.log(item)
// }

// array.forEach(printMe)//give reference

// array.forEach((item,index,array)=>{//we can also pass all these tooo
//     console.log(item,index,array)
// })

const myCoding=[
    {languageName:'javascript',
     languageFileName:"py"
    },
    {
      courseCode:101,
      courseID:11
    },
    {
        location:"delhi",
        country:"india"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.courseID)//directly fetch the value
})