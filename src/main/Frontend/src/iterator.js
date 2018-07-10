let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// console.info('for');
// for (let index = 0; index < xmen.length; index++) {
//     console.log(xmen[index]);
// }
//
// console.info('for...in');
// for (let key in xmen) {
//     console.log(xmen[key]);
// }
//
// console.info('forEach');
// xmen.forEach(xmen => console.log(xmen));
//
// console.info('for...of');
// for (let xman of xmen) {
//     console.log(xman);
// }
//
// let iterator = xmen[Symbol.iterator]();
//
// let next = iterator.next();
// while (!next.done){
//     console.log(next.value);
//     next = iterator.next();
// }


//TODO объект генерирующий итератор 1, 2, 3...
// let idGenerator = {
//     [Symbol.iterator]() {
//         let id = 1;
//         return {
//             next() {
//                 let value = id++;
//                 let done = false;
//
//                 return {value, done};
//             }
//         }
//     }
// };
//
// for (let id of idGenerator) {
//     console.log(id);
//     if (id > 100) {
//         break;
//     }
// }


//TODO условие в методе next
// let idGenerator = {
//     [Symbol.iterator]() {
//         let id = 1;
//         return {
//             next() {
//                 let value = id > 100 ? undefined : id++;
//                 let done = !value;
//
//                 return {value, done};
//             }
//         }
//     }
// };
//
// for (let id of idGenerator) {
//     console.log(id);
// }

// //TODO объект генерирующий итератор по случайным числам
// let randomGenerator = {
//     [Symbol.iterator]() {
//         let count = 0;
//         return {
//             next() {
//                 let value = Math.ceil(Math.random() * 100);
//                 let done = count > 10;
//                 count += 1;
//                 return {value, done};
//             }
//         }
//     }
// }

// for (let random of randomGenerator) {
//     console.log(random);
// }

// // TODO используем итератор вместо цикла
// let randomGenerator = {
//     generate(){
//         return this[Symbol.iterator]();
//     },
//     [Symbol.iterator]() {
//         let count = 0;
//         return {
//             next() {
//                 let value = Math.ceil(Math.random() * 100);
//                 let done = count > 10;
//                 count += 1;
//                 return {value, done};
//             }
//         }
//     }
// }
//
// // let random = randomGenerator[Symbol.iterator]();
// let random = randomGenerator.generate();
// console.log(random.next().value);


// // TODO Класс итерирующий таски
// class TaskList {
//     constructor() {
//         this.tasks = [];
//     }
//
//     addTasks(...tasks) {
//         this.tasks = this.tasks.concat(tasks);
//     }
//
//     [Symbol.iterator]() {
//         let tasks = this.tasks;
//         let index = 0;
//
//         return {
//             next() {
//                 let result = {value: undefined, done: true};
//
//                 if (index < tasks.length) {
//                     result.value = tasks[index];
//                     result.done = false;
//                     index++;
//                 }
//
//                 return result;
//             }
//         }
//
//     }
// }
//
// let taskList = new TaskList();
// taskList.addTasks('Изучить javaScript', 'Изучить ES6', 'Купить продукты');
//
// for (let task of taskList) {
//     console.log(task);
// }

//TODO do not repeat...
class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.array = array.map(item => item).sort(); //сортируем по алфавиту
        this.index = 0;
    }
    next() {
        let result = {value: undefined, done: true};

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }

        return result;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks('Изучить javaScript', 'Изучить ES6', 'Купить продукты');

for (let task of taskList) {
    console.log(task);
}