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

console.log(loginUserMessage()); // please enter userName
                                //  undefined