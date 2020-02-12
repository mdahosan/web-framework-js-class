/*Example-1*/
// function Course() {
//     this.institute = 'Pondit';
// }
//
// function JavaScript() {
//     console.log('JS');
// }
//
// function Php() {
//     Course.call(this);
//     JavaScript.call(this);
//     this.courseName = 'PHP';
//     console.log('PHP');
// }
//
// var php = new Php();
// console.log(php);

/*Example-2*/

function Institute(name) {
    this.institute = name;
}

Institute.prototype.printStatus = function () {
        console.log(this.title + ' Course Is Running....')
};

Institute.prototype.duration = '120HR';

function Course(institute, title) {
    Institute.call(this, institute);
    this.title = title;
}

// var courseInfo =new Course('Pondit', 'PHP');
// console.log(courseInfo.printStatus);

Course.prototype = Object.create(Institute.prototype);
var courseInfo =new Course('Pondit', 'PHP');

console.log(courseInfo.printStatus());
console.log(courseInfo.duration);
