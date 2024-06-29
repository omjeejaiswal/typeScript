let username = 'Omjee'
console.log(username)

// reason for the first error was same username definded in js and ts.


// let a  = 12
// let b = '6'
// let c = 2

// console.log(a/b) 
// // in js it does not check that b is string and automaitcally answer 12/6.

// console.log(c * b)
// // in js it does not check that b is string and automaitcally answer 2 * 6 = 12.


let a: number = 12
let b: number = 6
// let b: string ='6'
let c: number = 2

console.log(a/b)

console.log(c*b)