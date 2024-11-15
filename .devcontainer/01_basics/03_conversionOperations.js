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