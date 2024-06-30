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
// or 
// interface mathFunction {
//     (a:number, b:number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
//optonal parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3, undefined));
logMsg(sumAll(undefined, 3, 4));
