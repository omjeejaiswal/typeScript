"use strict";
let stringArr = ['one', 'hey', 'omjee'];
let guitars = ['start', 'jaiswal', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'omjee jasiwal';
stringArr.push('hey again');
guitars[0] = 1984;
guitars.unshift('jim', 45);
// stringArr = guitars // throw err
guitars = stringArr;
let test = [];
let bands = [];
bands.push('Van halen');
// tuple 
let myTuple = ['Omjee', 42, true];
let mixed = ['om', 1, false];
mixed = myTuple;
// myTuple = mixed // throw err
myTuple[1] = 42;
// object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Omjee',
    prop2: true
};
exampleObj.prop1 = 'Omjee';
let evh = {
    name: 'jasiwal',
    active: false,
    albums: [19984, 5150, 'OU452']
};
let JP = {
    name: 'omjee JAiswal',
    active: true,
    albums: [1, 2, 'O']
};
// evh = JP
// const greetGuitarist = (guitarist: Guitarist) => {
//     return `hello ${guitarist.name}!`
// }
// const greetGuitarist = (guitarist: Guitarist) => {
//     return `hello ${guitarist.name?.toUpperCase()}! using toUpperCase`
// }
const greetGuitarist = (guitarist) => {
    var _a;
    if (greetGuitarist.name) {
        return `hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}! using toUpperCase`;
    }
    return 'Hello!';
};
const greetGuitarist1 = (guitarist) => {
    return `hello ${guitarist.name}! `;
};
console.log(greetGuitarist(JP));
console.log(greetGuitarist1(evh));
// Enums
// "unlike most TypeScript features,Enums are not a
//  type-level addition to js but something
//  added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
