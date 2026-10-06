
// for loop
for(let j=0;j<10;j++)
{


    let ele= j;

    if(ele==5)
    {
         continue//skip this 
                  //break : skip 
    }
    console.log(ele)

}
console.log("here is the while loop")
//while loop

 let num=1
while(num<10)
{
    console.log(num)
    num=num+2
}

console.log("iterate the array")

let array=['supriya','shukla',"delhi","btech"]
let index=0;
 while(index<array.length)
 {
    console.log(`the ${index} element of array is ${array[index]}`)
    index=index+1;
 }

 //do while loop

 let val=1
 do{
    console.log(`Score is ${val}`)

 val++
 }while(val<=7)
