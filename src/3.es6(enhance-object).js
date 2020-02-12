// let Car = function (name, model) {
//     this.name= name;
//     this.model= model;
//     this.drive= function () {
//         console.log(this.name + " is running on the road....");
//     }
// };
//
// let car1 = new Car('BMW', 'M-123');
//
// console.log(car1.drive());
// //
let name = 'BMW';

let model = 'BM-123';

const Car = {
    name,
    model,
    drive(){
        console.log(this.name + " is running on the road....");
    }
};

console.log(Car);

Car.drive();
//
//
//
