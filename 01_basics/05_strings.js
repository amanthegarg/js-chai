const name = "Aman"
const repocount = 50

// console.log(name + repocount + "Value");// outdated and not a good practice

// console.log(`Hello my name ${name} and my repo count is ${repocount}`);
//This is modern way also known as string interpolation.

const gameName = new String('amanthegarg')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)//aman=> here [0,4)
//in substring we cant give -ve value like slice if we do that it consider it as 0 only
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  Aman The Garg  "
// console.log(newStringOne);
// console.log(newStringOne.trim());//this will remove whitespace from brginning and end only

const url = "https://github.com/amanthe-garg"

// console.log(url.replace('-',''))

// console.log(url.includes('aman'));//true
// console.log(url.includes('amanthegarg'));//false

// console.log(url.split("/"));










