// function print() {
//         console.log(`${this.name} is my favourite car`);
// }
//
// var car1 = {
//     name: 'BMW'
// };
//
// var car2 = {
//     name: 'Toyota'
// };
// //
// /*Bind*/
// var printCar1 = print.bind(car1);
// console.log(printCar1);

// var printCar2 = print.bind(car2);
// printCar2();
//
// /*Call*/
// ///for immediately call
// print.call(car1);
function sum(a, b) {
        return a + b + this.c
}

var object1 = {
    c: 10
}

var object2 = {
    c: 20
}


//bind
// var result = sum.bind(object1);
// console.log(result(1, 50));

//call
var result = sum.call(object1, 5, 5);
// console.log(result)

// /*Apply*/
// var result = sum.apply(object2, [5, 5]);
// console.log(result)