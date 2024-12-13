// Immediately Invoked Functon Expression (IIFE)

// Their is a pollution in the global scope, to avoid that we use "iife", so that function is invoked immediately.

// syntax: (FUNCTION DEFINATION)(FUNCTION CALL);

// the fun bellow is the named "iife"..

(function chai(){
    console.log(`DB CONNECTED`);
})(); // op : DB CONNECTED

// note: fun will be invoked immediately but to end it we need to use semi colon (;) at the end

// "iife" can be done using arrow fun eg. called as simple "iife" or unnamed "iife"

( ()=>{
    console.log(`DB CONNECTED TWO`);
    
}) (); // op: DB CONNECTED TWO 



// the iife fun also accept variable in it eg.

( (name)=>{
    console.log(`DB CONNECTED Three ${name}`);
    
}) ("Rishi");

// Note : first paranthesis is for parameters, second is for argument...

