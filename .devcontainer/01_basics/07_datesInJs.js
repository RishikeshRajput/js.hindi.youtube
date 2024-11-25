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
//let myCreatedDate = new Date("01, 26, 2023") // op: 1/26/2023, 12:00:00 AM, "mm, dd, yyyy"
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now() // we can declare as 'new Date' as well
// console.log(myTimeStamp); // op: 1732460301069 , time comes in miliseconds
// console.log(myCreatedDate.getTime()); // op: 1674691200000, time in milisec acc. to this date

// console.log(Date.now()); // op: 1732542428854, gives you op in miliseconds
// console.log(Math.floor(Date.now()/1000)); // op: 1732542811, gives you op in seconds while div by 1000, math.floor removes decimal val

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+ 1); // +1 becoz month start from 0 in js.
// console.log(newDate.getDay());

// note : customization can be done in dateand time , mostly used is 'toLocaleString'
// console.log(newDate.toLocaleString('default',{
//     weekday : "long"
// }))