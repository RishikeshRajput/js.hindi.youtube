/*
let score = "33"
console.log(typeof score)
console.log(typeof (score))


let valueInNumber = Number(score) // type conversion by datatype Number (datatype always starts with capital)
console.log(valueInNumber)
console.log(typeof valueInNumber)


let rank = "33abc"
let rankInNumber = Number(rank)
console.log(rankInNumber) // it will give NaN (not a number) but type will be converted to number
console.log(typeof rankInNumber)

let value = null
let valInNumber = Number(value)
console.log(valInNumber) 
console.log(typeof valInNumber)


let nul = undefined
let nulInNumber = Number(undefined)
console.log(nulInNumber) 
console.log(typeof nulInNumber)


let tru = true
let truInNumber = Number(true)
console.log(truInNumber) 
console.log(typeof truInNumber)



//conversion kaise hoga..number ka
// "33"=> 33
// "33abc"=> NaN
// true=> 1, false=> 0  etc..


// conversion kaise hoga boolean ka..
//1=> true, 0=> false
// "" => false ("" empty string)
// "rishi"=> true

let someNumber = 33
let stringNum = String(someNumber)

console.log(stringNum)
console.log(typeof stringNum)

*/


// ***************************Operations****************************

let value = 3
let negvalue = -value
//console.log(negvalue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

let str1 = "rishi"
let str2 = " nidhi"
//console.log(str1+str2)

// console.log("1"+2) // gives output 12
// console.log(1 + "2")// gives output 12
// console.log("1"+ 2+ 2)// gives output 122
// console.log(1 + 2 + "2")// gives outpput 32
// // reason behind this is if string is at first everthing is treated as string otherwise normal conversion will happen first

// console.log(+ true)// return 1
// console.log(true +)//this will give error
// console.log(+"")// return 0

let gameCounter = 100
++gameCounter
console.log(gameCounter)// prefix output 101
gameCounter++
console.log(gameCounter)// postfix output same 101

// readd about it @ prfix and postfix js mdn
// and can go through it at ECMA documentation



