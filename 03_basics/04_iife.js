// Immediately Invoked Function Expressions (IIFE)

(function chai ()
{
    //named iife
    console.log(`DB CONNECTED`);
    
})();// agar ek or iife likhna ho toh idhar semicolon laga dena
//global scope ke pollution se problem hoti h kai baar toh usse bachne ke liye iife ka use kiya hum logo ne

(function aurcode() {
    console.log(`DB CONNECTED TWO`);
    
})();

(()=> {
   //simple iife
    console.log(`DB CONNECTED THREE`);
    
})();

((name)=> {
    console.log(`DB CONNECTED FOUR ${name}`);
    
})("Aman");


