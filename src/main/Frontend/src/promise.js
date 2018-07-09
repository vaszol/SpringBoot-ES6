// callback:
// function applyForVisa(documents, resolve, reject) {
//     console.log('Обработка заявления...');
//     setTimeout(function () {
//         Math.random() > .5 ? resolve({}) : reject('В визе отказано: нехватка документов');
//         // let visa = {};
//         // resolve(visa);
//     }, 2000)
// }
//
// function bookhotel() {
//
// }
//
// function buyTickets() {
//
// }
//
// applyForVisa({}, function (visa) {
//         console.info('Виза получена');
//         bookhotel(visa, function (reservation) {
//             buyTickets(reservation, function () {
//
//             }, function () {
//
//             })
//         }, function (error) {
//         })
//     },
//     function (reson) {
//         console.error(reson);
//     });


function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('В визе отказано: нехватка документов');
        }, 2000)
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена', visa);
    // return visa;
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(visa), 2000);
    })
}

function bookhotel(visa) {
    console.log('бронируем отель');
    return Promise.resolve(visa);
}

function buyTickets(bocking) {
    console.log('покупаем билет', bocking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookhotel)
    .then(buyTickets)
    .catch(error => console.error(error));

