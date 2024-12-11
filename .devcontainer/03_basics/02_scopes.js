let a = 300 // it's in global scope


if(true){
    let a = 10
    const b = 20
    //console.log("inner variable : ", a);
}// all variables inside are in a block scope 

//console.log(a);


// Nested functions or nested scopes

// function one(){
//     const userName = "Rishi"

//     function two(){
//         const website = "youtube"
//         console.log(userName);
        
//     }
//     //console.log(website); // op : ReferenceError: website is not defined, becoz its out of the scope

//     //two()// note: if we wont call two here it wont be executed
    
// }

//one()// op : Rishi, becoz the function two() executed inside 

// note: child fun can use parent variable , but parent fun can't use child variale

if(true){
    const userName = "Rishi"
    if(userName === "Rishi"){
        const website = "Youtube"
        console.log(userName + website);// op : RishiYoutube
        
    }
    //console.log(website); // err : ReferenceError: website is not defined
    
}

//console.log(userName); // error : ReferenceError: userName is not defined


