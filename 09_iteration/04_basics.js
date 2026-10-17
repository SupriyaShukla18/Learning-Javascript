//const myNum=[1,2,3,4,5,6,7,8,9,10]

//for getting the only one vlaue in the array we need to know which loop or methofd we will use
//1.forEach()
//2.filter()
//3.map()

// 1.  const ele = myNum.forEach((items)=>{//it retrun nothing
//     console.log(items)
//   })

//   console.log(ele)//now understand forEach not return the value so undefined return

//2. const ele=myNum.filter((num)=>num>5 )//but this method :-filter it return the value
// //here understand if there is not scope{} that means not need to  write the return

 //console.log(ele)//it will return bcoz filter return the value 
  //if u write the fxn in the scope then u need to return the value


//   const ele= myNum.filter((num)=>{
//     return num>5//if u open the scope need to write the return
//   })

//    console.log(ele)
  
   //can also foreach loop but with the condition

// const newNums=[]

// myNum.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)//array is mutable in js
//     }
// })
// console.log(newNums)

//3.map
//const myNum =  [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.map((num)=>num+10)
  
// myNum.forEach((num)=>{
//    console.log(num+10)
// })
// console.log(newNums)

//we can use the map two or more times

// const newNum= myNum.map((num)=>num*10)
// .map((num)=>num+1)//the first map() will perform the method and then it will pass to the second map after making the array now it will modify furthur
// .filter((num)=>num>=40)// it return true and false //this will filter the value
// console.log(newNum)
 
//********************************reduce*********************************
//reduce() is a JavaScript array method used to process all elements of an array and reduce them to a single value, such as a sum, product, or object.
    const myNum=[1,2,3,4]

    const myTotal=myNum.reduce(function (previous_val,current_val){
     console.log(`previous: ${previous_val} and current:${current_val}`);//reduce also take callback function//it prevoius val is just written out of the function and then it return the value it will assign to the prevous value and current vlaue taken from the array
     return previous_val+current_val;
      },0)

      //can also be done my arrow function
      const total=myNum.reduce((previousval,currentval)=>previousval+currentval,0)

      console.log(myTotal)


      const course=[
         {itemname:"datascience",
           price:12000
         },{
            itemname:"cs",
            price:2000
         },
         {
            itemname:"web development",
            price:30000
         }

      ]

      const pricepay= course.reduce((previous,item)=> previous+item.price,0)
       console.log(pricepay)

      console.log(total)
    