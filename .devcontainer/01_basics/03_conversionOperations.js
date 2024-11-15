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
