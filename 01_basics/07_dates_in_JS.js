// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,23);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2025,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023") //(mm-dd-yy)
// console.log(myCreatedDate.toLocaleString());
// myCreatedDate = new Date("2023-01-14")   //(yy-mm-dd)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
console.log(Math.floor(Date.now()/1000));//because it gives in ms

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() +1 );

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday : "long"
    
})














