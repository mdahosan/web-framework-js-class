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

let Car = function (name, model) {
    this.name= name;
    this.model= model;
    this.drive= function () {
        // console.log(this);
        // console.log(this.name + " is running on the road....");
        // let name = this.name;
        setTimeout(() => {
            console.log('result after 1 sec');
            console.log(this);
            console.log(this.name + " i am going to accident....")
        }, 2000);
    }
};

let car1 = new Car('BMW', 'M-123');
car1.drive();