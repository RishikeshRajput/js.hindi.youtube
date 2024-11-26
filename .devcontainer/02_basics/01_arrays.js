// Array
// array declaration type:
const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[1]); // excessing values through indexing

// Array Methods:
myArr.push(6)
// console.log(myArr); // op: [0, 1, 2, 3, 4, 5, 6], element added at end
myArr.pop()
//console.log(myArr); // op: [0, 1, 2, 3, 4, 5],one element removed from end
myArr.unshift(9)
//console.log(myArr); // op: [9, 0, 1, 2, 3, 4, 5],one element added at zeroth index
myArr.shift()
//console.log(myArr); // op: [0, 1, 2, 3, 4, 5], one element removed fron zeroth index

// console.log(myArr.includes(3)); // op : true, gives boolean val
// console.log(myArr.indexOf(1)); // op : 1, gives index val 

 //const newArr = myArr.join() // note: join converts aarray into a string
 //console.log(newArr); // op: 0,1,2,3,4,5 , comma separated string 

 // Diff b/w Slice & Splice

console.log("A", myArr); // op: A [ 0, 1, 2, 3, 4, 5 ], array printed as it is

const myn1 = myArr.slice(1, 3)
console.log(myn1); // op : [ 1, 2 ], slice of an array is printed, doesnot include range "3"

console.log("B", myArr); // op: B [ 0, 1, 2, 3, 4, 5 ], arry printed as it is


const myn2 = myArr.splice(1, 3)
console.log(myn2); // op: [ 1, 2, 3 ], slice from array is printed with range "3"
console.log("C", myArr); // op: C [ 0, 4, 5 ], after doing "Splice", the slice we get is permanantly removed from original the array
 
// Note: "Splice" opration will manipulate original array and includes the range 
//        but "Slice" will give you a copy of the slice from array doesnot includes range
