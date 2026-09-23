// //function declaration
// function myFun(a, b) {
//   return a + b;
// }

// // function expression (annonymous function)
// const addition = function (a, b) {
//   return a + b;
// };

// // arrow function
// const subtraction = (a, b) => {
//   return a - b;
// };

// const multiplication = (a, b) => a * b;

// console.log(myFun(2, 3));
// console.log(addition(4,5));
// console.log(subtraction(6,7));
// console.log(multiplication(8,9));


let arr = [2, 3.4, "hello", 'A']
let arr2 = ['kishore']
let newArr = [...arr, ...arr2]

console.log(newArr);

let a = 
[
    {
        id : 101,
        name : 'Kishore',
        branch : 'CSE'
    },
    {
        id : 102,
        name : 'Vamshi',
        branch : 'IT'
    }
]