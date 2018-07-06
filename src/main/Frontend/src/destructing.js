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

function getScores() {
    return [3, 4, 5];
}

let scores = getScores();
console.log(scores);
let [a, b, c] = getScores();
console.log(a, b, c);

let yes = 'yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');
