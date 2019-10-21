/*let add = (x, y) => x + y;

console.log(typeof add);
console.log(add(3,4));


let square = function(x) {
    return x*x;
};

let square = x => x*x;

console.log(square(3));


let giveMeAnswer = () => 42;

console.log(giveMeAnswer());

let log =  () => console.log('logging');

log();


let multiply = (x, y) => {
    let result = x*y;
    return result;
};

console.log(multiply(2,3));



let getPerson = () => ({name: 'John'});

console.log(getPerson());


(() => console.log('IIFE'))();
*/



let numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;

numbers.forEach((num) => sum += num);

let squared = numbers.map(n => n*n );

console.log(sum);
console.log(squared);

let person = {
    name: 'Bob',
    greet: function () {
        var that = this;
        setTimeout( () => {
            console.log(`Hello, my name is ${this.name}`);
            console.log(this);
        }, 2000);
    }
};

person.greet();

