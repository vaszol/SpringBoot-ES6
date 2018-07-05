let firstname = 'Bill',
    lastname = 'Gates',
    email = 'test@mail.com';

let person = {
    firstname,
    lastname,
    email,
    sayHello() {
        console.log(`Hi my name is ${this.firstname} ${this.lastname}`);
    },
    get fullname(){
        return this.firstname + ' ' + this.lastname;
    },
    set fullname(value){
        this.firstname = value;
    }
}

// Object.defineProperty(person, 'fullname', {
//     get: function () {
//         return this.firstname + ' ' + this.lastname;
//     },
//     set: function (value) {
//         this.firstname = value;
//     }
// });

console.log(person);
// person.sayHello();
//
// person.firstname;
// person['firstname'];
//
// let property = 'lastname';
// person[property];
// person = {
//     [property]: 'Bill'
// }
//
// function createCar(property, value) {
//     // var car = {};
//     // car[property] = value;
//     // return car;
//
//     return {
//         [property]: value
//     }
// }
//
// console.log(createCar('vin', 1));