// function add(x, y) {
//     return x + y;
// }
// console.log(add(2, 5));

// let add1 = (x, y) => x + y;
// console.log(add1(2, 5));

// let square = function (x) {
//     return x * x;
// }
// let square = x => x * x;
// console.log(square(3));

// let multiply = (x, y) => {
//     let result = x * y;
//     return result;
// };
// console.log(multiply(3, 7));

// let getPerson = function () {
//     return (name: 'john');
// }
// let getPerson = () => ({name: 'john'});
// console.log(getPerson());

// (function () {
//     console.log('IIFE');
// })();

// (() => console.log('IIFE'))();

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// // numbers.forEach(function (num) {
// //    sum += num;
// // });
// numbers.forEach(num => sum += num);
// let squared = numbers.map(n => n * n);
// console.log(sum);
// console.log(squared);


let person = {
    name: 'Bob',
    // greet: function () {
    //     console.log(`Heelo my name is ${this.name}`);
    //     console.log(this);
    // }
    // greet: () => {
    //     console.log('Heelo my name is ' + this.name);
    //     console.log(this);
    // }
    greet: function () {
        // let that = this;
        // setTimeout(function () {
        //     console.log('Heelo my name is ' + that.name);
        //     console.log('that is ', that);
        //     console.log('this is ', this);
        // }, 2000);
        setTimeout(() => {
            console.log('Heelo my name is ' + this.name);
            console.log('this is ', this);
        }, 2000);
    }
};
person.greet();


let Task = () => console.log('Creating a task');
let task = new Task();
Task.bind();
Task.call();
Task.apply();
