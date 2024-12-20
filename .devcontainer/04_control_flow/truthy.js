const userEmail = []

// if (userEmail){
//     console.log("user got email");
// }
// else {
//     console.log("dont have email");
    
// }
// op: user got email, because square brackets are considers as truthy val..

// Falsy values:

// false, 0, -0, NaN, null, undefined, "", BigInt 0n
// other than this all are truthy values eg...

// Truthy values:

// "0", "false", " ", [], {}, function(){}

// To check if the array is empty, we have a method...

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


// To check if the object is empty, we have a method...

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
    
// }

// ############# Nullish Coalescing Operator (??) : null, undefined #########################

// it works on null and undefined, it basically does the typecheck of the value assign to the variable, if the 
// value is null or undefined or in some cases two values will be return at same time where we use "nullish coalescing op. (??)"

let val1 ; 

// val1 = 5 ?? 10 // op: 5, it took the random val

//val1 = null ?? 10 // op: 10, it took 10 becoz other val is null

//val1 = undefined ?? 15 // op: 15, it took 10 becoz other val is undefined

//val1 = undefined ?? 25 ?? 20 // op : 25, in case of more than two val where one in null or undefined , it will always take the first val

//console.log(val1);

// note: (??) is also used to handle errors



// ############# Terniary Operator (?) ############## 

// Syntax : condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

