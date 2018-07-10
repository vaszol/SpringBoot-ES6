//создание генератора
// function* generator() {
//
// }
//
// let generator = function* () {
//
// }
//
// let obj = {
//     * generator() {
//     }
// }
//
// class SomeClass {
//     * generator() {
//     }
// }

//TODO использование yield
// function* generator() {
//     yield 1;
//     yield 2;
// }
//
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* generator() {
//     // let result = yield; //Result: 1
//     let result = 1 + (yield); //Result: 2
//     console.log(`Result: ${result}`);
// }
//
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(1));
// console.log(iterator.next());

// function* generator() {
//     let array = [yield, yield, yield];
//     console.log(array[2]);
// }
//
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(1));
// console.log(iterator.next(2));
// console.log(iterator.next(3));

// function* generator() {
//     yield 42;
//     // yield [1, 2, 3];
//     yield* [1, 2, 3];
//     yield 43;
//
// }
//
// let iterator = generator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// function* genereArray() {
//     yield* [1, 2, 3];
// }
// function* generator() {
//     yield 42;
//     // yield [1, 2, 3];
//     yield* genereArray();
//     yield 43;
//
// }
//
// let iterator = generator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

function* generator() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.log(e);
    }
}

let iterator = generator();
console.log(iterator.next());
// console.log(iterator.return());
console.log(iterator.throw(new Error('textError')));
console.log(iterator.next());
