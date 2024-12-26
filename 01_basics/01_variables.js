const accountId = 1234
let accountName = "aman"
var accountMail = "gargaman200@gmail.com"
//do not use var as it arises the problem of block scope and functional scope which is solved by using let
//use let and const only
accountcity = "Karauli"

// accountId=1  
accountName = "ATG"
accountMail = "atg@gmail.com"
accountcity = "Pune";

console.log(accountId)
console.table([accountMail,accountName,accountcity])