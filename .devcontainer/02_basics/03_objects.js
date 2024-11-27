// Singleton

// Object Literals

// how to create object 

//Object.create // constructor method, singleton forms in it

const mySum = Symbol("key1")// symbol datatype, used here to learn right way to excess obj elements

const JsUser = {
    name : "rishi",
    "full name" : "rishikesh rajput",
    [mySum] : "mykey1",
    age : 27,
    location : "bengaluru",
    email : "rishi@hotmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

// how to excess elements from objects

// console.log(JsUser.email); // op: rishi@hotmail.com, it gave op becoz key is considered as string by default, one of the way to excess elements, elements in obj are in key : value pair,
                        // it will throw error when the key intentionally written as string eg "full name"
                        // or key is a "symbol" datatype

// console.log(JsUser["email"]); // op: rishi@hotmail.com, right way to excess the obj elements
// console.log(JsUser["full name"]); // op : rishikesh rajput

// declare symbol in an object and exess it ...
//console.log(JsUser[mySum]); // op: mykey1, *******interview*** 
                            // it's written [mysum], which is not written as string in this case whic is correct syntax for symbol
                            // if we don't want to treat it as a symbol we will write it directly "mysum"

// how to chng or override the val with help of dot(.)
//JsUser.email = "rajput@hotmail.com"

// how to stop further chngs on your obj, we use freeze
//Object.freeze(JsUser)// *********imp***********

JsUser.email = "rishi@123"// it won't be further modified becoz we used freeze before this
//console.log(JsUser);



// ******************* Function **************************
// how to declare a function

JsUser.greetings = function () {
    console.log("hello js user");   
}

// if we want to give reference of any variabe in fun we use string interpolation `${this.vaiable}`
// "this" will gather all the properties of the fun of that particular fun
JsUser.greetingsTwo = function () {
    console.log(`hello js user, ${this.name}`);   
}


// how to call function

//console.log(JsUser.greetings); // op: [Function (anonymous)] , here fun is not excecuted just it eturns the reference of fun

console.log(JsUser.greetings()); // op: hello js user
console.log(JsUser.greetingsTwo()); // op: hello js user, rishi




                        