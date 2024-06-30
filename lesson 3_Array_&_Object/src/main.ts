let stringArr = ['one', 'hey', 'omjee']

let guitars = ['start', 'jaiswal', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'omjee jasiwal'
stringArr.push('hey again')

guitars[0] = 1984
guitars.unshift('jim', 45)

// stringArr = guitars // throw err
guitars = stringArr 

let test = []
let bands: string[] = []
bands.push('Van halen')

// tuple 
let myTuple: [string, number, boolean] = ['Omjee', 42, true]

let mixed = ['om', 1, false]

mixed = myTuple
// myTuple = mixed // throw err


myTuple[1] = 42







// object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Omjee',
    prop2: true
}

exampleObj.prop1 = 'Omjee'

// type Guitarist = {
//     name: string,
//     active: boolean,
//     active2?: boolean, // active2?: means this is optional 
//     albums: (String | number)[]
// }

interface Guitarist {
    name: string,
    active: boolean,
    active2?: boolean, // active2?: means this is optional 
    albums: (String | number)[]
}
let evh: Guitarist = {
    name: 'jasiwal',
    active: false,
    albums: [19984, 5150, 'OU452']
}


let JP: Guitarist = {
    name: 'omjee JAiswal',
    active: true,
    albums: [1, 2, 'O']
}

// evh = JP


// const greetGuitarist = (guitarist: Guitarist) => {
//     return `hello ${guitarist.name}!`
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//     return `hello ${guitarist.name?.toUpperCase()}! using toUpperCase`
// }

const greetGuitarist = (guitarist: Guitarist) => {
    if(greetGuitarist.name) {
        return `hello ${guitarist.name?.toUpperCase()}! using toUpperCase`
    }
    return 'Hello!'
    
}

const greetGuitarist1 = (guitarist: Guitarist) => {
    return `hello ${guitarist.name}! `
}


console.log(greetGuitarist(JP))
console.log(greetGuitarist1(evh))



// Enums
// "unlike most TypeScript features,Enums are not a
//  type-level addition to js but something
//  added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)







