const user = {
    username : "Aman",
    price : 999,
    welcomemessage : function(){
        {
            console.log(`${this.username} , welcome to website`);
            console.log(this);
            
        }
    }
}

// user.welcomemessage()
// user.username = "Garg"
// user.welcomemessage()

// console.log(this); // here this gives {}  that is empty because we are using node environment
//but if we run in browser then it gives window object

// function chai()
// {
//     let username = "Aman"
//     // console.log(this);
//     console.log(this.username);//undefined in a function
   
// }

// chai()

// const chai = function ()
// {
//     let username = "Aman"
//     console.log(this.username);//undefined in a function
// }
// chai()

// const chai = () =>
// {
//     let username = "Aman"
//     console.log(this);
//     console.log(this.username);//undefined in arrow function as well
// }
// chai()

//explicit return
// const addTwo = (num1 , num2) =>
// {
//     return num1 + num2
// }

// //implicit return
// // const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)

// const addTwo = (num1 , num2) => {username : "Aman"} //to return object we have to wrap it in a ()
const addTwo = (num1 , num2) => ({username : "Aman"}) //like this


// console.log(addTwo(3,4));


const myArray =  [2, 5, 3, 7, 8]   

// myArray.forEach(function () {})    //correct syntax
// myArray.forEach(() => {})         //correct syntax


