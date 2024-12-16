// if :

// <, >, <=, >=, ==, !=, ===, !==

const isLoggedIn = true

// if ( 3 == "3"){
//     console.log("executed");
    
// } // op : executed

// if ( 3 === "3"){
//     console.log("executed");
    
// } // no op. bcoz its strict equal or triple equal(===) condi. which also type check.


// if ( 2 !== "2"){
//     console.log("executed");
    
// } // op : executed, becoz the type is different


const temperature = 41

// if (temperature == 51){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }

// console.log("executed");

const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);  
// } // op: User power : fly

// console.log(`User power : ${power}`); // op: ReferenceError: power is not defined, becoz it is out of 
//scope


// ############## Implicit scope ###############

//const balance = 1000

//if (balance > 500) console.log("test"); // op :test

// we can write multiple lines in a implicit scope by using coma, but at end we need to use semi colon.....

//if (balance > 500) console.log("test") , console.log("test2");
// op : test
//      test2
// note: this type of code very unreadble code, so it's not a good practice, should not write like this..

// Nesting ###############

// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 700){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
    

// } // op: less than 1200


// ##### && ###### this ampersant operator will check if both the conditions are to or not..

const userLoggedIn = true
const debitCard = true

// if (userLoggedIn && debitCard){
//     console.log("allow to buy course");
    
// } else{
//     console.log("don't allow");
    
// } // op: allow to buy course



// we can give multiple conditions as well but all should be true to excecute code eg. ...

// if (userLoggedIn && debitCard && 2==2){
//     console.log("allow to buy course");
    
// } else{
//     console.log("don't allow");
    
// } // op: allow to buy course



// ######## || ##### this pipe operator used as "or", in which one of the condition should be true..

// const loggedInFromGoogle = true
// const loggedInFromEmail = true

// if (loggedInFromEmail || loggedInFromGoogle || true){
//     console.log("allow to logIn");
    
// } // op : allow to logIn