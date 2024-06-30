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
// Rest parameter 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
// const numberOrString = (value: number | string): string => {
//     if(typeof value === 'string') return 'string'
//     if(typeof value === 'number') return 'number'
// }
// solve the upper error
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('this should never happen!');
};
