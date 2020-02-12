/*default parameter*/
// let sum = (a, b=1) => a+b;
// console.log(sum(10, 2));

/*Spread and rest operator .....*/
//difference is depends on its usage

/*Example:- rest*/
//convert value to array
// var numbers = [1, 2, 3, 4, 74, 89];
//
// var summation = numbers.reduce(function (a, b) {
//     return a+b;
// });
//
// console.log(summation);

// let sum = (...num) => num.reduce((a,b) => a+b);
//
// let summation = sum(1, 2, 3, 4, 5)
//
// console.log(summation);

// /*Example:- spread*/
// convert array to value
// let numbers = [1, 2, 3, 4, 5];
// console.log(...numbers);

//destructuring (alternate of array push)
// var numbers = [1, 2, 3, 4, 74, 89];
// numbers = [...numbers, 6, 7, 8, 9, 10];
// console.log(numbers);

// let Institute1 = {
//     name: 'Pondit',
//     address: 'RH Home center'
// };

let Institute2 = {
    ...Institute1,//spread operator or destructuring
    name: 'BITM'
};

console.log(Institute2);
