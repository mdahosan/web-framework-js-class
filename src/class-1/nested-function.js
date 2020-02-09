
function outer() {

    var greeting = 'Hello Ahosan'; //outer properties are accessible inner but reverse for inner to outer

    function inner() {
        console.log(greeting+' Output from inner function');
    }
    inner();

    console.log('Output from outer function');
}

outer();