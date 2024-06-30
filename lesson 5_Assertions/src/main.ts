
// Types Assertions - 
// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


type One = string
type two = string | number
type three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as two // les specific
let c = a as three // more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a:number, b:number, c:'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string 
(10 as unknown) as string

// The DOM
const img = document.querySelector('img')!
// const img2 = document.querySelector('#Id')
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src











