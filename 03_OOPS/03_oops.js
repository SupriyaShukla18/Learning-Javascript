const learner={
    name:'supriya',
    mail:'supriya2mail.com',
    fees:999
}
//console.log(typeof(learner.mail))

//for deconstructing the object
console.log(learner.name)// rather than repeating this various time js has deconstrutor

const {name}=learner//deconstructor
console.log(name)

//can also assign the name

const {mail:email}=learner// curly braces means de constructuring
console.log(email)