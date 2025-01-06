// Primitive(copies i.e similar to pass by value)

// 7 types => string,null,boolean,undefined,number,BigInt,Symbol
//JavaScript is dynamically typed

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);//false
// console.log(typeof(id));//Symbol

const bigNumber = 5164n

// console.table([typeof(score) , typeof(scoreValue) , typeof(outsideTemp) ,typeof(userEmail),typeof(isLoggedIn),typeof(id),typeof(anotherId),typeof(bigNumber)])


// Reference(Non-Primitive)

// Array,Objects,Function

const myArray = ["Aman","Abhinav","Aditya","Mayank","Gaurav","Saarthak"]

let myObj = {
    name : "Aman Garg",
    age : 21
}

const myFunction = function()
{
    console.log("Hello World");
    
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//    Stack(Primtive) => copy     ,      Heap (Non-Primtive) => reference

let myName1 = "Aman Garg";
let myName2 = myName1 // here pass by value is used and a copy is made in stack memory for primitive datatypes
myName2 = "Garg Aman" //this change will be made in the copy only

// console.log(myName1);
// console.log(myName2);

let userOne = {
    Name: "Aman Garg",
    age : 21
}

let userTwo = userOne; 
//Here as it is an object that is an non-primitive datatype therefore in heap memory both point to the same object
//so if we make changes in any of them both will change automatically
 userTwo.Name = "Garg Aman"

console.log(userOne.Name);
console.log(userTwo.Name);



