//this--> it refers the current context

const course ={
    name:'supriya',
    id:123,
    price:3000,
    mail:"shuklasupriya@gmail.com",
    welcomemsg:function(){
      console.log(`${this.name} welcome to the website`)

      console.log(this)//this will return whole object whatever the current context is
    }
}

 course.welcomemsg()


// course.name='prem' //now the current context is prem it will call this
// course.welcomemsg()

//console.log(this)//this will return {}-->bcoz right now we are in node environment and current the current object is empty there is no current context is in global 
                 //but not on web and in browser the object is window so it will refer to this
   
                 //but this will run in the fxn it return various vlaue
//normal fxn                 
function chai(){


    const username='supriya'
    //console.log(this)//it will return various value
    console.log(this.username)//this only work for object and this is the fxn it return undefined
}
chai()

//arrow function

const addtwo=(num1,num2)=>{
  return num1+num2
}

console.log(addtwo(4,7))

//implicit return if there is only one expression

const add=(num1,num2)=> num1+num2//no need to write return here bcoz it will automatically return this 
 console.log(add(4,5))

 //if the curly braces are written{} then u have to write return and 
 // if u write () don't need to write the return

  const  sub =(num1,num2)=>(num2-num1)
  console.log(sub(9,45))

  //for returning the object it must be in curly braces{}
   const objret=()=>({name:'supriya'})

   console.log(objret())