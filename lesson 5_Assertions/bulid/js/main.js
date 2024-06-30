"use strict";
// Types Assertions - 
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// convert to more or less specific
let a = 'hello';
let b = a; // les specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string 
10;
// The DOM
const img = document.querySelector('img');
// const img2 = document.querySelector('#Id')
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
