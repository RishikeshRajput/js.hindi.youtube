// Their are two types of datatypes:
/*
A) Primitive : 7 types of primitive datatypes
    String, Number, Boolean, Symbol, Null, Undefined, BigInt

1) number: 
    const score = 100
    const score = 1110.3

2) boolean:
    const isLoggedIn = false

3) null:
    const outsdeTemp = null

4) undefined:
    let userEmail;

5) symbol:
    const id = symbol("123")
    const score = symbol("123")
Note: both values are same but memory address is diff. that's what symbol does, makes values unique

6) bigint:
    const bigNumber = 1315353531344n
Note: adding 'n' after any number makes is bigint otherwise js itself consider the actul bigint number

7) string:
const name = "rishi"
    
B) Reference type (Non Primitive) : 3 types of reference datatypes 
    Array, Objects and Functions

1) array:
const heros = ["shaktiman", "nagraaj", "doga"]

2) objects:
let myObj = {
name:"rishi",
age:"27"
}

3) functions:
const myFunction = function(){
console.log("hello world")
}



# To check the datatype of any variables or constants we use : "typeof"
    this will give diff. values in diff. datatypes eg.

==>    Type of value                      Result
    Undefined                 :       "undefined"

    Null                      :       "object"

    Boolean                   :       "boolean"

    Number                    :       "number"

    String                    :       "string"

    Symbol                    :       "symbol"

    Object(native and 
    does not implement [[Cal]]):      "object"

    Object(native or host 
    does not implement [[Cal]]):      "function"

    Object(host and 
    does not implement [[Cal]]):      mplementation-defined except may not be "undefined",
                                      "boolean", "number" or "string"
                
    Note: All non primitive datatypes will return "Function" , when typeof and functions datatype will be
          "objectFunction"

*/

/* ********************** Memory in js ************************
# Two types of memory in js: Stack & Heap
   Stack is used for primitive datatype and heap is used for non-primitive datatype

   Stack when used gives the copy of the obj or var
   Heap when used gives the original reference of the obj or var
    
*/
/*
eg. for stack

let myyoutubeName = "Rishi Rajput"
let anotherName = myyoutubeName

console.log(anotherName);
console.log(myyoutubeName)
//op : Rishi Rajput
//     Rishi Rajput
anotherName = "pankaj mahajan"

console.log(anotherName); //  pankaj mahajan
console.log(myyoutubeName) // Rishi Rajput 
*/

//eg. for heap 

// let userOne ={
// email : "user@gmail.com",
// upi : "user@ybl"
// }

// userTwo = userOne
// userTwo.email = "rishi@gmail.com"

// console.log(userOne.email); // op: rishi@gmail.com
// console.log(userTwo.email); // op: rishi@gmail.com

// // note: it changes both of them  or we can say changes will be done in original value
//          because in heap it takes the reference of original obj. 






