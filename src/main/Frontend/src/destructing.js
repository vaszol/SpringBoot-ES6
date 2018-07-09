// let languages = ['Javascript', 'PHP', 'Python', 'Ruby'];
// let js, php, py, rb;
// [js, php, py, rb] = languages;
// console.log(js, php, py, rb);

// let [js, php, py, rb] = ['Javascript', 'PHP', 'Python', 'Ruby'];
// console.log(js, php, py, rb);
//
// let scores = [3, 4, [5, 6]];
// let [a, b, [c, d]] = scores;
// console.log(a, b, c, d);

// function getScores() {
//     return [3, 4, 5];
// }
//
// let scores = getScores();
// console.log(scores);
// let [a, b, c] = getScores();
// console.log(a, b, c);
//
// let yes = 'yes';
// let no = 'No';
//
// [yes, no] = [no, yes];
// console.log('Yes is', yes);
// console.log('No is', no);
// console.log('o_O');

// Object distruct:::

let person = {
    firstname: 'john',
    lastname: 'Doe'
};

// let firstname = person.firstname;
// let lastname = person.lastname;
// let{firstname, lastname} = person;
// console.log(firstname, lastname);
// let{firstname: first, lastname: last} = person;
// console.log(first, last);
// let{firstname: first, lastname: last, age = 25} = person;
// console.log(first, last, age);
// let{['first' + 'name']: first, lastname: last, age = 25} = person;
// console.log(first, last, age);

let user = {
    firstname: 'john',
    lastname: 'Doe',
    social: {
        facebook: 'joandoe',
        twitter: 'jdoe'
    }
};

// let {firstname: first, lastname: last, social: {facebook}, age = 25} = user;
// console.log(first, last, facebook, age);
// function post(url, config) {
//     config.data;
//     config.cache;
// }
// function post(url, {data, cache}) {
//     console.log(data, cache);
// function post(url, {data: {firstname, lastname}, cache}) {
//     console.log(firstname, lastname, cache);
// }
// let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return {
        firstname: 'john',
        lastname: 'Doe',
        social: {
            facebook: 'joandoe',
            twitter: 'jdoe'
        }
    };
}
let {firstname, lastname, social: {twitter}} = getUserInfo();
console.log(firstname, lastname,twitter);