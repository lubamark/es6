class Task {
    constructor (title = Task.getDefaultTitle()){
        console.log('Do task');
        this.title = title;
        this._done = false;
        Task.count++;
    }

    get done() {
        return this._done === true ? 'Done' : 'Not Done';
    }

    set done(value) {
        if(this._done !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error!');
        }
    }

    complete(){
        this.done = true;
        console.log(`This ${this.title} done`);
    }

    static getDefaultTitle() {
        return 'Task';
    }
}

Task.count = 0;

let task = new Task('Title');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);





/*
let task2 = new Task('Title 2');
let task3 = new Task();



console.log(typeof Task);
console.log(typeof task);
console.log(task instanceof Task);


console.log(task.title);
console.log(task2.title);
console.log(task3.title);

task2.complete();
console.log(Task.count);
*/
