// Reduce:-

//syntax:-

//const array = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0
// const sumWithInitial = array.reduce(
//     (accumulator, currentVlaue) => accumulator + currentVlaue, initialValue
// )
// console.log(sumWithInitial);
// expected output : 10


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )

// in arow fun:...
 const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0  )

// console.log(myTotal);
// op:
// acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3
// 6

const shoppingCart = [
    {
        courseName : "js course",
        price : 999
    },
    {
        courseName : "py course",
        price : 2999
    },
    {
        courseName : "java course",
        price : 3999
    },
    {
        courseName : "rb course",
        price : 1999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);

