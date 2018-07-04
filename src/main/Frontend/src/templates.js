function greet(name) {
    console.log(`Hello ${name}`);
    console.log(typeof `Hello ${name}`);
    console.log(`Hello ${name}`.toUpperCase());
}

greet('bill')

function createEmail(to, from, subject, message) {
    console.log(`
    To: ${to}
    From: ${from}
    Suject: ${subject}
    Message: ${message}
    `)
}

createEmail("test1@mail.com", "test1@mail.com", "hello", "test text");

function add(x, y) {
    console.log(` ${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add("5", "7");

let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}