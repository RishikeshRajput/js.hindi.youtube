// const score = 400 // by default it is a number
// console.log(score);

// const balance = new Number(100) // here strictly declared as a Number
// console.log(balance);

// console.log(balance.toString()); // converted to string
// console.log(balance.toFixed(2)); // to give the precision value, precision value can vary as per our use

// const otherNumber = 23.8699
// console.log(otherNumber.toPrecision(2)); // op: '24', precision gives a roundof value

// const hundreads = 100000
// console.log(hundreads.toLocaleString('en-IN')); // op: 1,00,000 ,'toLocalString' wil add comma's to the no. 'en-IN', is a indian standard parameter


//################# Maths ##############

// console.log(Math);// "Math" is a library in js
// console.log(Math.abs(-4));// op: 4 , "Math.abs", absolute property will just convert -ve integer to +ve 
// console.log(Math.abs(4)); // op:4 , if value is +ve nothing will chng
// console.log(Math.round(2.4)); // op:2 , simply roundof with nearest val
// console.log(Math.ceil(2.2)); // op: 3, it'll take the highest val possible
// console.log(Math.floor(2.9)); // op: 2, it'll take lowest val possible
// console.log(Math.min(0.5,5,37, 5)); // op: 0.5, gives minimum val
// console.log(Math.max(0.5,5,37, 5)); // op: 37 , gives maximum val


// console.log(Math.random()); // op: random val, its gives random val b/w 0-1
// console.log(Math.random()*10); // op : random but not 0, we multiply by 10 , so it will shift one val, to avoid zero
// console.log((Math.random()*10)+1); // op: random val but not 0, this is an ideal way to do the opeartion becoz second val may be 0 , so add 1 
// console.log(Math.floor(Math.random()*10)+1) // op: random val but in

// to control the output no. we put the range of max and min and construct a formula

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1) + min));
//Note: we used floor to get lowest val, we did (max - min +1), to avoid zero and val in max-min range, we add (min) to get min val 