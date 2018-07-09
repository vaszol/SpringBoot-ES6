// 1:
// let symbol = Symbol();
// let symbol = Symbol('name');
// let symbol2 = Symbol('name');
// let symbol = Symbol.for('name');
// let symbol2 = Symbol.for('name');
// let name = Symbol.keyFor(symbol);
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol2);
// console.log(name);

// 2:
// let password = Symbol();
// let user = {
//     username: 'r2d2',
//     // [Symbol('password')]: 'c3po'
//     [password]: 'c3po',
//     password: 'adsfa'
//
// }
// console.log(user.password);
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));
// // let password = user[Symbol.for('password')];
// // console.log(password);
// console.log(Object.getOwnPropertySymbols(user));

// 3:
let object = {
    iterator: 0,
    [Symbol.iterator](){

    }
}
