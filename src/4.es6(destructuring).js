// const cars = ['BMW', 'Toyota', 'Corolla'];

/*es5*/
// var car1 = cars[0];
// console.log(car1);

/*es6*/
// let [a, b, c] = cars;
// console.log(a);


///extract property from object is called destructuring
// //
const Car = {
    name: "BMW",
    model: "BM-123",
};
// // //
let {name, model} = Car;




// // //
// console.log(name);
// // console.log(name, model)
//
// function print(name, model) {
//     console.log(`Name: ${name}, Model: ${model}`)
// }
// print(name, model);


function print({name, model}) {
    console.log(`Name: ${name}, Model: ${model}`)
}

print({model,name});
