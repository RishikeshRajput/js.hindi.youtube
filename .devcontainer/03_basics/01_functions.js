// "function" is keyword, "sayMyname" is function name, "()" is syntax where we pass parameters, "{}" is a scope, all together 
// it becomes function defination

function sayMyName(){
    console.log("rishi");   
}
// while callinng a function "sayMyName"or function name is a reference and "()" is an ececution where we pass arguments
//sayMyName() // op : rishi


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);   
// }

// addTwoNumbers(3 , 4) // op : 7
// addTwoNumbers(3, "4") // op : 34, it'll check both datatypes simply put together
// addTwoNumbers(3, null) // op : 3


// function addTwoNumbers(number1, number2){
    
//     let result = number1 + number2
//     return result 
// }

// const result = addTwoNumbers(3, 5)
// console.log(result);


function addTwoNumbers(number1, number2){

    return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log(result); // op : 8


// function loginUserMessage(userName){

//     return `${userName} just loggedIn`
// }

// console.log(loginUserMessage("rishi")); // op : rishi just loggedIn

// console.log(loginUserMessage()); // op: undefined just loggedIn, if you won't pass any argument it will return undefined not null

function loginUserMessage(userName){
    if(userName === undefined){
        console.log("please enter userName");
        return
        
    }

    return `${userName} just loggedIn`
}

// console.log(loginUserMessage()); // please enter userName
                                //  undefined
// note: in this fun we gave a "if" condition to avoid the undefined value, instead of that we can use
// "!" which specifies not equal to...eg.

function loginUserMessage(userName){
    if(!userName){
        console.log("please enter userName");
        return
    }
    return `${userName} just loggedIn`
}     

//console.log(loginUserMessage()); // please enter userName
                                //  undefined

// to avoid cases of undefined values we will give some value in the parameters so that it won't enter the loop
// and gives you some value, but if you give a value than it will overwrite the value given inside parameters..
// eg....

function loginUserMessage(userName = "unknown user"){
    if(!userName){
        console.log("please enter userName");
        return
    }
    return `${userName} just loggedIn`
}     

// console.log(loginUserMessage()); // op: unknown user just loggedIn, gives val of parameter becoz we didn't gave any value in the argument
// console.log(loginUserMessage("Terminator")); // op: Terminator just loggedIn, will override the value of parameter

// ****************** Rest Operator(...) ************************************
// Rest operator and Spread operator are same , represented as (...) three dots,
// only difference is their use case.

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(60)); //op: 60
// console.log(calculateCartPrice(200,390,436)); //op: 200, it will give first value and avoid others to avoid this we use "rest" operator.

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,390,436));  // op: [ 200, 390, 436 ]



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,390,436,342,566,3456)); // op: [ 436, 342, 566, 3456 ], 200 went in val1, 390 went in val2 rest in an array


// handling an object in function :

const user = {
    userName : "rishi",
    id : 2608
}

function handleObject(anyObject){
    console.log(`User login ${anyObject.userName}, who's id is ${anyObject.id}`);
    
}

// handleObject(user) //op: User loginrishi, who's id is 2608

// directly we can create obj in a previously created function

// handleObject({
//     userName : "arpita",
//     id : 1806
// })


