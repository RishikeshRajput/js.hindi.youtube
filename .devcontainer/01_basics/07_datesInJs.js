// Dates

let myDate = new Date()

// console.log(myDate); // op: 2024-11-24T14:38:48.854Z
// console.log(myDate.toString()); // op: Sun Nov 24 2024 14:38:48 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // op: Sun Nov 24 2024
// console.log(myDate.toLocaleDateString()); // op: 11/24/2024
// console.log(myDate.toTimeString()); // op: 14:38:48 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate); // op: object


//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString()); // op: Mon Jan 23 2023, mpnth will start from zero in js if in single digit, becoz it's in  array

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // op: 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023, 01, 26") // op: 1/26/2023, 12:00:00 AM , "yyyy, mm, dd"
let myCreatedDate = new Date("01, 26, 2023") // op: 1/26/2023, 12:00:00 AM, "mm, dd, yyyy"
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // we can declare as 'new Date' as well
console.log(myTimeStamp); // op: 1732460301069 , time comes in miliseconds
console.log(myCreatedDate.getTime()); // op: 1674691200000, time in milisec acc. to this date

