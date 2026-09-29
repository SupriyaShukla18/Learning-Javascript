//for passing the multiple value in function
//use spread (...)-3 dots can add multiple values in parameter 
 function calculateCartPrice(...value)//it is useful while making ecommerce website
 {
    return(value)// it will return the vlaue in the form of array


 }

 console.log(calculateCartPrice(33,45,68))

    //passing the object in function

    const user={
        name:"supriya",
        price:"9999"
    }


    function handleObject(anyobject)
    {
        return`the name of the user is ${user.name} and the price of the course is ${user.price}`
    }

    console.log(handleObject(user))//this also can done--> console.log(handleObject({name:"supriya",price:9999})) it will pass the argument while calling the function

    const array=[100,200,300]

    function secondEleArray(array)//give any parameter just remember whenever u call enter the real datatypename

    {
        return array[1]
    }

    console.log(secondEleArray(array))// can also be done like this--> console.log(secondEleArray([100,200,300]))  directly make pass the argument while calling function

