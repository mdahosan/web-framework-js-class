/*A function can be stored in a variable*/
//
// let greet = function greetings(name) {
//     return 'Welcome !'+name;
// }
//
// console.log(greet('Pondit'));

// var welcome = greetings;
//
// console.log(welcome('Ahosan'));

/*A function can be stored in an array*/
//
// var testArray = [2, 3, 4, greetings('ddd')];
//
// console.log(testArray);

/*A function can be stored as an object Field or Property*/
//
// var testObject = {
//     greet: greetings
// };
//
// console.log(testObject.greet('BITM'));

/*We can create a function as needed*/

// var result = 10 + (function () {return 20})();
//
// console.log(result);

/*We can pass function as argument*/         //callback

// function greetings(name) {
//     return 'Welcome !'+name;
// }
//
// function recieption(name, callbackFunction) {
//
//         return callbackFunction(name);
//
// }
//
// let result = recieption('Ahosan', greetings)
//
// console.log(result);


// console.log(recieption('Ahosan Habib', function (name) {
//         return 'Hello ! '+name;
// }));

/*We can return function from another function*/
//
//
// function base(b) {
//     // console.log(b);
//
//     return function (n) {
//         var result = 1;
//         for (var i=0; i<b; i++ ){
//             result *= n
//         }
//         return result;
//     }
//
//
// }
// console.log(base(2)(2));

// var power = base(2);

// var result = power(3);
// console.log(result)

