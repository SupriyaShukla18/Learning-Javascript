// let date= new Date();
// console.log(date.toDateString());
// //this function return the week name month date and year
// console.log(date.getTime());
// //it basically calculate the millisecond since 1970-01-01 to present time 
// console.log(date.getFullYear());
// //its only return the year
// console.log(typeof date)
// // date is the object type
// console.log(date.toLocaleString())
// // it return date/month/year,time 
// console.log(date.toLocaleDateString())
// //it only return  date/month/year not time
// console.log(date.toUTCString())
//  // it returns the date and time according to gmt
 
//  let myDate= new Date(2026,9,21)
//  console.log(myDate.toDateString())
//  // We can create a specific date by passing year, month, and day
//  //in javascript the month will start from 0 - jan,1-feb and so on 

let date=  Date.now();
console.log(date);

// it returns millisecond since 1970-01-01 to current
console.log(Math.floor(date/1000))
//*interview impotant- basically it return the second
