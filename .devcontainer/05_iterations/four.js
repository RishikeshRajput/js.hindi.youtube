// forin loop :- generally used for looping on objects... 

// Syntax :-
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js : "javaScript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    //console.log(key);
    
} 
// op :- js
// cpp
// rb
// swift

for (const key in myObject) {
    //console.log(`${key} is shortcut for '${myObject[key]}'`); 
} 
// op: js is shortcut for 'javaScript'
// cpp is shortcut for 'c++'
// rb is shortcut for 'ruby'
// swift is shortcut for 'swift by apple'


// forin loop can be used on arrays as well eg.....

const programming = ["cpp", "java", "python", "ruby", "swift"]

// for (const key in programming) {
//     console.log(key);
    
// }
// op :0
// 1
// 2
// 3
// 4 This is because the array keys are bydefault nuber which starts from zero, thats why we use objects, to get keys of array ...

for (const key in programming) {
    //console.log(programming[key]);
    
}
// op: cpp
// java
// python
// ruby
// swift

// note : forin loop cannot be applied on the map..
