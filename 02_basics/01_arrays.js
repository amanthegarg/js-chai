//array

// shallow copy => same reference point . if we change one it will also affect other
// Deep copy => makes an identical copy . this will not affect original one if make change in th copy

// array-copy-operations create shallow copy not deep copy
const myArray =[0,1,2,3,4,5]
// console.log(myArray[0]);
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)//like push but from start
// myArray.shift() //like pop but from start

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

//slice, splice 
console.log("A",myArray);
const myn1 = myArray.slice(1,3) //slice does deep copy
console.log("B",myArray);

const myn2 = myArray.splice(1,3) //splice does shallow copy
console.log("C",myArray);





