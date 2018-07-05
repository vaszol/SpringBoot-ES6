// классы являются фунциями!

// //function declaration:
//
// function Task() {
//
// }
//
// // function expression:
//
// let Task = function Task() {
//
// }
//
// // new Object:
// // class declaration:
//
// class Task {
//     constructor(){
//         console.log('Creating a task');
//     }
// }

// class expression:
let Task = class Task {
    constructor() {
        console.log('Creating a task');
    }
}

// наследование:
let SubTask = class extends Task {
    constructor() {
        super();
        console.log('Creating a subTask');
    }
}

let task = new Task();
let subtask = new SubTask();

console.dir(task);
console.dir(subtask);
