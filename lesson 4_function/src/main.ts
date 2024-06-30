// type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

// Literal types
let myName: 'Omjee'
// myName = 'jaiswal'

let userName : 'Omjee' | 'Jasiwal' | 'Amy'
userName = 'Amy'


// functions
const add = (a:number,b:number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}


logMsg('Hello!')
logMsg(add(2,3))

let subtract = function(c: number, d:number):number {
    return c - d
}

logMsg(subtract(2,3))

type mathFunction = (a:number, b:number) => number
// or 

// interface mathFunction {
//     (a:number, b:number): number
// }

let multiply: mathFunction = function(c,d) {
    return c * d
}
logMsg(multiply(2,3))



//optonal parameters
const addAll = (a:number, b:number, c?:number):number => {
    if(typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

const sumAll = (a:number = 10, b:number, c:number = 2):number => {
    return a + b + c
}

logMsg(addAll(2,3,2))

logMsg(addAll(2,3))

logMsg(sumAll(2,3))

logMsg(sumAll(undefined, 3, undefined))

logMsg(sumAll(undefined, 3, 4))

