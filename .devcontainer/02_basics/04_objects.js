//const tinderUser = new Object() // note: it is a singleton obj

const tinderUser1 = {} // note: it is a non singleton obj

//console.log(tinderUser);// op: {}
//console.log(tinderUser1); // op: {} , both give same op

// declare variables in an object

tinderUser1.id = "123abc"
tinderUser1.name = "sammy"
tinderUser1.isloggedIn = false

//console.log(tinderUser1); // op: { id: '123abc', name: 'sammy', isloggedIn: false }

// declare objects inside objects

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Rishikesh",
            lastName : "Rajput"
        }
    }
}


//console.log(regularUser.fullName?.userFullName.firstName); // op: Rishikesh
// note : the "?" question mark, after onj name is given in for in case if you are not sure about if
// that particular object is present or not

//console.log(regularUser.fullName); // op: { userFullName: { firstName: 'Rishikesh', lastName: 'Rajput' } } 




//**********************************imp8***************
// Merging objects:
// syntax : const returnedTarget = Object.assign(target, source);
// note: acc. to syntax the source will merge into target but if we want that all obj merge into new obj we give 
// empty braces {}, as a target

//const target = { a: 1, b: 2 };
//const source = { b: 4, c: 5 };

//const returnedTarget = Object.assign(target, source);

//console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget === target);
// Expected output: true

// note eg.

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

//const newObj = Object.assign({}, obj1, obj2, obj3)
// giving empty braces is not necessary but is a safe practice 
//console.log(newObj); // op: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// another way to merge objects is by using "spread" eg.

// const newObj1 = {...obj1, ...obj2, ...obj3}
// console.log(newObj1);// op: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// how to access objects when it comes from the database in the form of array

const users = [
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 2,
        email : "p@gmail.com"
    },
    {
        id : 3,
        email : "d@gmail.com"
    }
]

// console.log(users[0].email); // op: r@gmail.com
// console.log(users[1].id); // op: 2

// to perform operation on objects we convert them into key or val and store them in an array, 
// so we can iterate through them...eg

console.log(tinderUser1); //op : { id: '123abc', name: 'sammy', isloggedIn: false }

console.log(Object.keys(tinderUser1)); // op: [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser1)); // op: [ '123abc', 'sammy', false ]

// we use "entries" to convert key val in an array, gives us an array inside an array
console.log(Object.entries(tinderUser1)); // op: [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedIn', false ] ]

// to check if the property is present in the obj or not
console.log(tinderUser1.hasOwnProperty('isloggedIn')); // op : true
console.log(tinderUser1.hasOwnProperty('islogged')); // op: false




