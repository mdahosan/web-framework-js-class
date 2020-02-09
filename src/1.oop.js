//Constructor

let Car = function (name, model) {
    this.name= name;
    this.model= model;
    this.drive= function () {
        console.log(this.name + " is running on the road....");
    }
};

let car1 = new Car('BMW', 'M-123');
let car2 = new Car('Toyota', 'T-111');
let car3 = new Car('Corolla', 'C-222');

let cars = [car1, car2, car3];

cars.forEach(function (car) {
    console.log(car.name+car.model)
    car.drive();
})


// fruits.forEach(function (element) {
//     console.log(element)
// })


// console.log(car1.name);


// let fruits = ['banana', 'apple'];

// fruits.forEach(function (element) {
//     console.log(element)
// })

// let fruits = {
//     f1: 'Banana',
//     f2: 'Apple',
// };


// for (let x in fruits){
//     console.log(fruits[x]);
// }














