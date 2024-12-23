// for of loop :....

// ["", "", ""]
// [{}, {}, {}]

//Syntax :-
// for (const element of object) {
    
// } // note : "element" can be referred as iterator


const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//     console.log(num);
    
// }

const greetings = "ram ram bhai saryane"

// for (const greet of greetings) {
//     console.log(greet);
    
// }


// ############ Maps ###############

// note : it will return key value pair, all vlues will be unique, cannot repeat values..

 const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')
map.set('IN', 'INDIA')

// console.log(map);

// loop on a map eg:...

// for (const key of map) {
//     console.log(key);                              
// }
// op : [ 'IN', 'INDIA' ]
// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'FR', 'FRANCE' ] ,   here the vlaues came in same arr to take it differently we use a syntax f key value eg..

for (const [key, value] of map) {
    console.log(key, ":-", value);                              
}
// op: IN :- INDIA
// USA :- UNITED STATES OF AMERICA
// FR :- FRANCE

