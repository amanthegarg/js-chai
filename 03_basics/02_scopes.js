// var c = 300
// let a = 300
// if (true) {
//   let a = 10;
//   const b = 30;
//   var c = 30;
//   console.log("inner : ",a);
  
// }

// console.log(a);
// // console.log(b);
// console.log(c);

function one()
{
    const username = "Aman"
    function two() {
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);//out of scope

    two()
    
}
// one()

if (true) {
    const username = "Aman"
    if (username==="Aman") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);//out of scope
    
}

// +++++++++++++++++++++++++++++++++++++++++++ Intersting +++++++++++++++++++++++++++++++++++++++++++++

addone(5) // here we can do it
function addone(num){
    return num + 1
}
addone(5)

// addtwo(5) // in this declaration of function we Cannot access 'addtwo' before initialization
const addtwo = function (num){
    return num + 2
}

addtwo(5)