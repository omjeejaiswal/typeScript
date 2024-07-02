"use strict";
// Generic
// const echo = (arg: string): string => arg
// or 
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('Omjee'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Omjee' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Omjee'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: 'Omjee' }));
console.log(isTrue({})); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // Process the user with the logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Omjee' }));
// console.log(processUser({name: 'Omjee'}))
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Omjee jasiwal",
        "username": "o123",
        "email": "Omjee@omjee",
        "address": {
            "street": "street no 10",
            "house no": "A-261",
            "city": "New Delhi",
            "zipcode": "110059"
        },
        "phone": "801......."
    },
    {
        "id": 2,
        "name": "jasiwal",
        "username": "omjee123",
        "email": "@omjee",
        "address": {
            "street": "street no 10",
            "house no": "A-261",
            "city": "New Delhi",
            "zipcode": "110059"
        },
        "phone": "802......."
    },
];
console.log(getUserProperty(usersArray, "email"));
console.log(getUserProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("OMjee");
console.log(store.state);
store.state = "jaiswal";
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Omjee', 22, true]);
console.log(myState.state);
