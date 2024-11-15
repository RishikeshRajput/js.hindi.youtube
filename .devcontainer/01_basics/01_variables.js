const accountId = 1234 // const is used for declaring constants //
let accountEmail = "rishi@123" // let used to declare variables //
var accountPassword = "123" // var is also used for declaring variables , not in practice //
accountCity = "Burhapur" // do not declare variable like this , without assigning the type //

let accountState // semi colon ';' is not necessary to use // 


/*
prefer not to use var
because of issue in block scope and functional scope  
*/

console.log(accountId)


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])