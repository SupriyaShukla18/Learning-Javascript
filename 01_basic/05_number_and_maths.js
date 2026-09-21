const score= 1000
//console.log(typeof score)
const num= new Number(1000)
//console.log(num)
//console.log(typeof num)

//console.log(num.toString())
//after changing it into string now many function of string can be apply

//console.log(num.toFixed(3))
//it will return the value after the decimal
//mostly used in e-commercial website

const anotherNum=459.90
//console.log(anotherNum.toPrecision(3))
//it roundoff the value and give the precise value
const hundred=1000000
//console.log(hundred.toLocaleString('en-in'))


//*****************************Maths******************************
//console.log(Math)
//maths is an object which includes various  values and function
//console.log(Math.abs(-45))
//return absolute value and change the negative value to positive
//console.log(Math.round(45.900))
//it will round off the value and give  and return the value without decimal
let randomNum = Math.random();
console.log(randomNum)
const dice= Math.floor(Math.random()*6) +1
console.log(dice)
