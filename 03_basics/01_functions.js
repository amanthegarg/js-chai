function sayMyName()
{
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}

// sayMyName()

function addTwoNumbers(number1,number2) {
    console.log(number1+number2);

}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"a") 
// addTwoNumbers(3,null)

function addTwoNumbers(number1,number2) {
    // let result = number1 + number2
    // return result
    return (number1+number2);

}

let result =  addTwoNumbers(3,5)
// console.log("Result : ",result);

function loginUserMessage (username)
{
    if(username === undefined) // we can also use !username in place of username === undefined
    {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage());

function calculateCartPrice (...num1) // here ... works as rest operator
{
    return num1
}

function calculateCartPrice (val1,val2,...num1) // here ... works as rest operator
{
    return num1
}
//here 200 and 400 get assigned to val1 and val2 respectively
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Aman",
    price : 199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
};
     
// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400 , 100, 600]

function returnSecondValue (getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));

