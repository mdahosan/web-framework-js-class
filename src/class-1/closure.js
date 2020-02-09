const APP_NAME = 'TestApp';

function landing() {
    console.log('Welcome To Visit '+APP_NAME)
}

//
console.dir(landing);
//
// landing();
//
function base(b) {
    // console.log(b);
    return function (n) {
        var result = 1;
        for (var i=0; i<b; i++ ){
            result *= n
        }
        return result;
    }
}

var power = base(2);
var result = power(3);
// console.log(result)
