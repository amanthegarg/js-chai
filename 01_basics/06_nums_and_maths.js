const score = 400 // it should be a Number
// console.log(score);

const balance = new Number(100)// here it is surity that it is a NUMBER
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));//it returns string and should be used carefully
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));//indian standard

//+++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random()); // Math.random() gives values between 0 to 1
// console.log((Math.random()*10) + 1); // this is how it will give values > 1 
// console.log(Math.floor((Math.random()*10) + 1)); //this will give integer value from 1 to 10


const min = 10;
const max = 20; 

console.log(Math.floor((Math.random()* (max-min+1))+ min));





