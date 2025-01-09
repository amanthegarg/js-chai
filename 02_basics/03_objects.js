// singleton
//object.create

//  literal se banega toh singleton nhi banega
//  or constructor se banega toh singleton banega

//object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser ={
    name : 'Aman',
    "full name": 'Aman Garg',
    mySym1 : 'mykey1', // here it works as string
    [mySym2] : 'mykey2', //here it works as symbol
    age : 21,
    location : 'Jaipur',
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    email : 'gargaman2003@gmail.com'
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);//if key has spaces in it then it can only be accessed this way
// console.log(typeof jsUser.mySym1);
// console.log(typeof jsUser.mySym2);
// console.log(jsUser[mySym1]);
// console.log(jsUser[mySym2]);//for accessing symbol   

// jsUser.email = "amangarg@google.com"
// Object.freeze(jsUser)
// jsUser.email = "amangarg@microsoft.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
    
}
// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








