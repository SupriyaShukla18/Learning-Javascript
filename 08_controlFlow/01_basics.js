const balance= 40000
if(balance>40)
{
    console.log( "test")
}else{
    console.log("not passed" )
}

//nested condition
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromEmail=true
if(userLoggedIn && debitCard)
{
    console.log("allow to buy");
}

 if( loggedInFromGoogle || loggedInFromEmail)
{
 console.log("user Logged in")
}