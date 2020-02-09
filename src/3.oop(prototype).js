function Car(name, model) {
    this.name = name;
    this.model = model;
}

Car.prototype.drive = function () {
    console.log('I am driving.....')
};

Car.prototype.company  = 'Mitsubishi';

let car1 = new Car('Toyota', 'T-111');
let car2 = new Car('Corolla', 'C-222');

car1.drive();

console.log(car1.company)
console.log(car2.company)


// function Car(name, model) {
//     this.name = name;
//     this.model = model;
// }
//
// Car.prototype.info = function () {
//     console.log(this.name, this.model)
// };
//
// Car.prototype.drive = function () {
//     console.log('I am driving.....')
// };
//
// Car.prototype.company = 'BMW';
//
//
// // Car.prototype = {
// //     info: function () {
// //             console.log(this.name, this.model);
// //     },
// //     drive: function () {
// //             console.log('I am driving.....');
// //     }
// // }
//
// var car1 = new Car('BMW', 'BM-1234');
// var car2 = new Car('Toyota', 'T-124');
// // var car3 = new Car('Corolla', 'M-X124');
// //
// car1.drive();
// car1.info()
//
// car2.drive();
// console.log(car1);
//
//
// //
// // var cars = [car1, car2, car3];
// //
// // cars.forEach(function (car) {
// //     console.log(car.name);
// //     car.drive();
// // })