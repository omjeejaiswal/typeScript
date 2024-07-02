// Generic


// const echo = (arg: string): string => arg
// or 
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray 
    (arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('Omjee'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'Omjee'}))
console.log(isObj(null))

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {

    if(Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }

    if(isObj(arg) && !Object.keys(arg as keyof T). length) {
        return {arg, is: false}
    }

    return {arg, is: !!arg}
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Omjee'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({name: 'Omjee'}))
console.log(isTrue({})) // modified
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))



interface BoolCheck<T> {
    value: T,
    is: boolean,
}


const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }

    if(isObj(arg) && !Object.keys(arg as keyof T). length) {
        return {value: arg, is: false}
    }

    return {value: arg, is: !!arg}
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // Process the user with the logic here
    return user
}

console.log(processUser({id: 1, name: 'Omjee'}))
// console.log(processUser({name: 'Omjee'}))



const getUserProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name" : "Omjee jasiwal",
        "username" : "o123",
        "email" : "Omjee@omjee",
        "address": {
            "street" : "street no 10",
            "house no": "A-261",
            "city" : "New Delhi",
            "zipcode": "110059"
        },
        "phone" : "801......."
    },

    {
        "id": 2,
        "name" : "jasiwal",
        "username" : "omjee123",
        "email" : "@omjee",
        "address": {
            "street" : "street no 10",
            "house no": "A-261",
            "city" : "New Delhi",
            "zipcode": "110059"
        },
        "phone" : "802......."
    },
]

console.log(getUserProperty(usersArray, "email")) 
console.log(getUserProperty(usersArray, "username"))

class StateObject<T> {
    private data: T 

    constructor(value: T) {
        this.data = value
    }

    get state() : T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject<string>("OMjee")
console.log(store.state)
store.state = "jaiswal"
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Omjee', 22, true])
console.log(myState.state)




