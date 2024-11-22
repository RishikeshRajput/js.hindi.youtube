const score = 400 // by default it is a number
console.log(score);

const balance = new Number(100) // here strictly declared as a Number
console.log(balance);

console.log(balance.toString()); // converted to string
console.log(balance.toFixed(2)); // to give the precision value, precision value can vary as per our use

const otherNumber = 23.8699
console.log(otherNumber.toPrecision(2)); // op: '24', precision gives a roundof value
