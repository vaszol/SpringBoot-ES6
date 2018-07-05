class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена';
    }

    set done(value) {
        if(value !== undefined && typeof value ==='boolean'){
            this._done = value;
        }else {
            console.log('Ошибка! Укажите значение true или false');
        }
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`)
    }

    static getDefaultTitle() {
        return 'Задача';
    }
}

// Task.count =0;
//
// let task = new Task('убрать комнату');
// let task2 = new Task('купить продукты');
// let task3 = new Task();
// // console.log(typeof task);
// // console.log(task instanceof Task);
// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
//
// console.log(Task.count);
//
// task2.complete();

let task = new Task('убрать комнату');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);