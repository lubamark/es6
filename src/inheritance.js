class Task {
    constructor (title = Task.getDefaultTitle()) {
        console.log('Создание задачи');
        this._title = title;
        this.done = false;
        Task.count++;
    }

    get title () {
        return this._title;
    }

    set title (value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Задача';
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`)
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }

    complete() {
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`)
    }
}


let task = new Task('Изучить JS');
let subtask = new SubTask('Изучить ES6', task);



task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(SubTask.count);
console.log(SubTask.getDefaultTitle());


/*
console.log(subtask instanceof Task);
console.log(subtask instanceof SubTask);
*/

