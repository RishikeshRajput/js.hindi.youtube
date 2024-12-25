// Map :

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = mynumbers.map( (num) => (num + 10) )
// console.log(newnums);
//  op : [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// const newnums = mynumbers.map( (num) => {return num + 10} )
// console.log(newnums);
//  op : [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// Chaining:- using multiple methods at the same time...

const newnums = mynumbers
                .map( (num) => (num * 10) )
                .map( (num) => (num + 1) )
                .filter( (num) => (num >=40) )
console.log(newnums);
// final op :
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]

// Note: "Map" will return the val anyhow, but in case of "Filter" it will only return when the condition is true..

