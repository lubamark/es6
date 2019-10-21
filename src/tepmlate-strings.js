function greet(name) {
    console.log(`Hello ${name}`.toUpperCase())
}
greet(`Bill`);

function createEmail (to, from, subject, message) {
    console.log(`
        To: ${to},
        From: ${from}
        Subject: ${subject}
        Message: ${message}
        `)
}

createEmail('me@test.com', 'me', 'About me', 'Help me!');

function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('3','40');


let name = 'Bill';

console.log(upperName`Hello ${name}`);
function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}
