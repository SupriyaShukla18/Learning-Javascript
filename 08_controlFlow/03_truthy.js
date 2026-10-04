const mail=[]


if(mail)
{
    console.log("got user mail")
}else{
    console.log("not got user mail")
}
//falsy value:
//false,0,-0, BigInt,0n,"",null,undefined,NaN

//truthy value
//"0",'false'," ",[],{},function(){}

if(mail.length==0)
{
    console.log("array is empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length==0){//this method is change the keys of objec tinto array and then the length will be checked is that true or not
   console.log(" object is empty")
}

//Nullish Coalescing operator(??):null undefined
// let result = value ?? defaultValue;
//Agar value null/undefined hai → defaultValue milegi.
//Agar value kuch aur hai → wahi value milegi.
// let val1=5??10;
let val1= null??100
let val2=undefined??150
console.log(val1)
console.log(val2)

let val3=null??undefined??120
console.log(val3)//120

let val4=null??100??300
//100
console.log(val4)

//ternary operator
//condition ? true:false

const tea=100
tea>80?console.log("more than 80"):console.log("more than 80")

