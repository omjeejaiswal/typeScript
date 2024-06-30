"use strict";
// class Coder{
//     name: string
// }
// class Coder{
//     name: string
//     music: string
//     age: string
//     lang: string
//     constructor(
//         name: string, 
//         music: string, 
//         age: number,
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Omjee = new Coder('Omjee', 'Rock', 45);
console.log(Omjee.getAge());
// console.log(Omjee.age)
// console.log(Omjee.lang)
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Mac', 'Sara', 'lofi', 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // ++ mean count increament first -- So our first id is 1
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of Strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil', 'Omjee Jasiwal'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen'];
