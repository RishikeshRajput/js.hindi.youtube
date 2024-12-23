// foreach:-  loop or foreach callback function, callback function is nothing but the function without name..eg...

const coding = ["cpp", "java", "python", "ruby", "swift", "react"]

coding.forEach(function (val) {
    //console.log(val);
    
})
// op : cpp
// java
// python
// ruby
// swift
// react

// instead of this we can directly use arrow fuction eg...

coding.forEach((val) => {
    //console.log(val);
    
})
// op : cpp
// java
// python
// ruby
// swift
// react

// note : here the val used in the foreach loop is nothing but just an iterator..

// another way of using foreach by declaring printme function

function printme(val){
    //console.log(val);
    
}

coding.forEach(printme) // note: just give the refrence(printme) it will itself 
// op: cpp
// java
// python
// ruby
// swift
// react

// another way to call foreach to know the complete structure of the array eg.

coding.forEach((val, index, arr) => {
    //console.log(val, index, arr);
    
})
// op:- 
// cpp 0 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]
// java 1 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]
// python 2 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]
// ruby 3 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]
// swift 4 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]
// react 5 [ 'cpp', 'java', 'python', 'ruby', 'swift', 'react' ]


// To apply for each on a array containing multiple objects...

const myCoding = [
    {
        languageName : "python",
        languageFilename : "py"
    },
    {
        languageName : "ruby",
        languageFilename : "rb"
    },
    {
        languageName : "javascript",
        languageFilename : "js"
    }
    
]

// myCoding.forEach((val) => {
//     console.log(val);
    
// }) 
// op :-
// { languageName: 'python', languageFilename: 'py' }
// { languageName: 'ruby', languageFilename: 'rb' }
// { languageName: 'javascript', languageFilename: 'js' }

myCoding.forEach((val) => {
    console.log(val.languageFilename);
    
}) 
// op:-
// py
// rb
// js