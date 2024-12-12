const user = {
    userName : "Rishi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website!`);
        console.log(this); // op: "this" will give you the curent context of the obj. means the val. stored in an obj

        
    }
}

// user.welcomeMessage()
// user.userName = "Pankaj"
// user.welcomeMessage()

// console.log(this); // op : {}, it will refer empty obj. 




// function chai(){
//     let userName = "rishi"
//     console.log(this.userName);
    
// }

// chai() // op: undefined, becoz this will only work in an obj. not in function




// const chai = function (){
//     let userName = "rishi"
//     console.log(this.userName);
    
// }

// chai()// op: undefined,




// eg. of "Arrow function":.....

// const chai = () => {
//     let userName = "rishi"
//     console.log(this.userName);
    
// }

// chai()// op: undefined,


//################ Arrow Function ###############

// syntax: () => {}
// basic arrow fun. ,  called as explicit return in which we use return with curly braces :-

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//console.log(addTwo(2,5)); // op: 7, if you wrap it in curly braces we need to use return keyword

// amother type of arrow fun : Implicite return, in which we don't use return with paranthesis...

// const addTwo = (num1 , num2) => num1 + num2

// console.log(addTwo(2,5)); // op: 7, 

// const addTwo = (num1 , num2) => (num1 + num2)

// console.log(addTwo(2,5)); // op: 7, if wraped into paranthesis no need to use return keyword


// Note : we need to wrap obj. as well while using implicite arrow fun. eg.

const addTwo = () => ({userName : "rishi"})

console.log(addTwo()); // op: { userName: 'rishi' }
