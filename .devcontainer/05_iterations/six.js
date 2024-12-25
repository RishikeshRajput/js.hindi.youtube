//Filter Map and Reduce:

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNum = myNum.filter( (num) => num > 4) // op: [ 5, 6, 7, 8, 9, 10 ]

// const newNum = myNum.filter( (num) => {
//     return num > 4
// }) // op: [ 5, 6, 7, 8, 9, 10 ]

// note: in filter if we use paranthesis than val will be printed, but if we use curly braces or we  write it in a scope than we have to use return keyword for explicit return.

// what if we have to use foreach instead of filter, eg...

// const newNum = []

// myNum.forEach((num) => {
//     if (num > 5){
//         newNum.push(num)
//     }
// }) // op: [ 6, 7, 8, 9, 10 ]

// console.log(newNum); 

// Other example of filter...

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
]

let userBooks = books.filter( (bk) => bk.genre === 'History' )
//console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);
