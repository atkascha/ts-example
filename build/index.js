"use strict";
// import User from './User';
// let u = new User('atka', 2);
// u.getOlder();
// console.log(u.details)
const button = document.querySelector('button');
const span = document.querySelector('#count');
const add = (_event) => {
    let count = parseInt(span.innerHTML);
    count++;
    span.innerHTML = `${count}`;
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', add);
