function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet(undefined, undefined);

/**
 * es5
 */
function sum() {
    console.log(arguments instanceof Array);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });

    console.log(sum);
}

/**
 * es6
 * @param values
 */
function sum(...values) {
    console.log(values instanceof Array);

    let sum = 0;

    values.forEach(value => {
        sum += value;
    })

    console.log(sum);
}

function sum(...values) {
    console.log(values.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        })
    );
}

sum(5, 7, 2, 10);
