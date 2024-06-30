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


