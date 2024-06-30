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
