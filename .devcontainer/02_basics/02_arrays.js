// Array

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// Push:

//marvel_heros.push(dc_heros)
// note: "push" will merge the array into another and consider it as a single element, makes
   //     changes in the original array.
// console.log(marvel_heros); // op: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][1]); // op : Flash, not a good practice

// Concat:

//const all_heros = marvel_heros.concat(dc_heros)
// note: "concat" will actually merge both the elements of an array in a single array
  // it doesnot make chngs in orignl array
//console.log(all_heros);// op: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// Spread: syntax: [...array1, ...array2, ...array3, etc]

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // op: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// Note: "Spread" will give the same op as "concat", spread can merge more than two arrays,
//        we prfer using spread


// Flat: syntax: array.flat(depth)
    // "depth" can be given according to the no. of array inside an array, to avoid conflict 
    //          we can give depth as "infinty"

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

// const real_another_array = another_array.flat(3)
// console.log(real_another_array); // op: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array); // op: // op: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11] , same op as previous

// Note: "Flat" returns a new array with all sub-array elements concatenated into it recurcively upto specified depth.

// Other array operations
// isarray:
// console.log(Array.isArray("rishi")); // op: false, to check array, to check if ("rishi") is an array or not

// from:
// console.log(Array.from("rishi")); // op: [ 'r', 'i', 's', 'h', 'i' ], to convert given data into array

//console.log(Array.from({name : "rishi"})); // op :[], returns empty array becoz given set is a key value pair
                                            //  we need to specify whwt key or value we need t concert ino array
                                            // ***************************
// of : 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // op : [ 100, 200, 300 ] , returns new array from set of elements


