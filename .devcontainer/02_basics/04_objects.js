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


console.log(regularUser.fullName.userFullName.firstName); // op: Rishikesh
console.log(regularUser.fullName);

