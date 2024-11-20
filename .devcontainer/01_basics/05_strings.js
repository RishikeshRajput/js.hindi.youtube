// const name = "rishi"
// const repoCount = 90

//console.log(name + repoCount + " young");  this method is older nowadays we use backticks (``) eg.

//This is called `string interpolation` in which we make placeholders for values 

// console.log(`Hello my name is ${name}, my repocount is ${repoCount}`);
// const nickname = "Joey"
// const attitude = "disgusting"
// console.log(`Hey, i'm ${nickname} i'm ${attitude} `);

// Strings methods or functions

const gameName = new String('Mario Forever') // another way of declaring a string

console.log(gameName[0] ); // op: M, index value or key value pair in js eg. o:M, 1:a, 2:r etc
console.log(gameName.__proto__);

console.log(gameName.length); // op: 13
console.log(gameName.toUpperCase()); // op: MARIO FOREVER
console.log(gameName.charAt(2)); // op: r
console.log(gameName.indexOf('i')); //op: 3
console.log(gameName.substring(0, 4)); // op: Mari , we cannot pass -ve values in substring

const newString = gameName.slice(-13, -4)// in slice we can excess -ve index of chars
console.log(newString);// op: Mario for



