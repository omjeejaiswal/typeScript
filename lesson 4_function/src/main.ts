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


// Rest parameter 
const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))


const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while(true) {
        i++
        if(i>100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ?true: false
}

// use of the never type

// const numberOrString = (value: number | string): string => {
//     if(typeof value === 'string') return 'string'
//     if(typeof value === 'number') return 'number'
// }

// solve the upper error

const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'
    return createError('this should never happen!')
}