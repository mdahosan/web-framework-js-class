//Constructor

// let Car = function (name, model) {
//     this.name= name;
//     this.model= model;
//     this.drive= function () {
//         // console.log(this);
//         console.log(this.name + " is running on the road....");
//         // let name = this.name;
//         setTimeout(function () {
//             console.log('result after 1 sec');
//             console.log(this);
//             console.log(this.name + " i am going to accident....")
//         }.bind(this), 2000);
//     }
// };
//
// let car1 = new Car('BMW', 'M-123');
// console.log(car1.drive());


// let car2 = new Car('Toyota', 'T-111');
// let car3 = new Car('Corolla', 'C-222');
//
// let cars = [car1, car2, car3];
//
// cars.forEach(function (car) {
//     console.log(car.name+car.model)
//     car.drive();
// });

// function print() {
//     console.log(this)
// }
// print();

/*Binding*/
//
// function fuel(amountOfFuel) {
//    return  this.fuel + amountOfFuel;
// }
//
// var car = {
//     fuel: 50
// };
//
// var totalFuel = fuel.bind(car);
//
// console.log(totalFuel(40));
