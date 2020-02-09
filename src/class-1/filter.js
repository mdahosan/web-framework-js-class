// var ages = [32, 33, 16, 40];
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// function myFunction() {
//     console.log(ages.filter(checkAdult)) ;
// }
//
// myFunction(myFunction());

var numbers = [1, 2, 3, 4, 5, 6];
//
// var oddNumbers = [];
//
// for (var i = 0; i<numbers.length; i++){
//     if(numbers[i]%2 == 1){
//         oddNumbers.push(numbers[i]);
//     }
// }
//
// console.log(oddNumbers);
//
//
// var oddNumbers = numbers.filter(function (value) {
//         return value % 2 == 1;
// })
//
// console.log(oddNumbers);
//
function customFilter(numbers, callbackFunction) {
    var newArray = [];
    for (var i=0; i<numbers.length; i++){
        if(callbackFunction(numbers[i])){
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}
//
var oddNumbers = customFilter(numbers, function (element) {
    return element % 2 == 1;
});
// //
// //
console.log(oddNumbers);
//
