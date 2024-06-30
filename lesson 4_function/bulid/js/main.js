"use strict";
// Literal types
let myName;
// myName = 'jaiswal'
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(2, 3));
