class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    get title(){
        return this.title;
    }
    set title(value){
        this._title = value;
    }

    static getDefaultTitle(){
        return 'Задача';
    }

    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" Выполнена`);
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }

    complete(){
        this.done = true;
        console.log(`Подзадача "${this.title}" Выполнена`);
    }
}

let task = new Task('Изучить JavaScript');
let subTask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);


// console.log(subTask instanceof SubTask);
// console.log(subTask instanceof Task);

