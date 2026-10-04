//IIFE
//Immediately Ivoked Function Expression
//An IIFE is a function that is defined and immediately executed/called.
(function(){
    //code
})();//here () this will ivoked or called the fxn immediately
// don't forget to break ; the code

(function hello(){//named iife
  console.log('hello')
})();//Here, the function is created and called immediately.

//why do we use it
//1.To execute a function immediately
//2.to create private or local scope 
//3.To prevent variables from polluting the global scope.
//4.Variables declared inside an IIFE cannot be directly accessed outside it.
//5.Useful for initialization code that needs to run only once.

//arrow fxn with iife
 const add =(()=>{
    return 103+599
})();
console.log(add);

(()=>{
    console.log("supriya")
})();
