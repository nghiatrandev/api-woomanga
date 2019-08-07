const request = require('request');
const Category = require('../db/category-model');
const constrollers = require('./controllers');

// function test() {
//     Category.find()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

function test() {
    constrollers.searchManga('nghia tran');
}

test();