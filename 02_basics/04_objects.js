// const tinderuser = new Object()// singleton object
const tinderuser = {} // non-singleton object 
tinderuser.id = "123abc"
tinderuser.name = "Ammu"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    email : "gargaman2003@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Aman",
            lastname : "Garg"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);
const obj1 = { 1 : "a" , 2 : "b" }
const obj2 = { 3 : "a" , 4 : "b" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2) // {} => used as target , obj1 and obj2 as source
const obj3 = { ...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id :    1, 
        email : "aman@gmail.com"
    },
    {
        id :    1, 
        email : "aman@gmail.com"
    },
    {
        id :    1, 
        email : "aman@gmail.com"
    },

]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"))
// console.log(tinderuser.hasOwnProperty("isLogged"))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

course = {

    courseInstructor : "Aman",
    coursename : "js in hindi",
    price : "999"

}

// console.log(course.coursename);

// const {courseInstructor} = course
// console.log(courseInstructor);

// const {courseInstructor : instructor} = course
// console.log(instructor);



// a JSON Object
// {
//     "name" : "Aman",
//     "coursename" : "js in hindi",
//     "price" : "free"

// }


// a json Array of objects
// [
//     {},
//     {},
//     {}
// ]




