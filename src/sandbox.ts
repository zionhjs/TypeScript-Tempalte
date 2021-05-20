// some initial test:
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//     console.log(input);
// });

let character = 'mario';
let age = 24;
let isBlackBelt = false;

// can change the value of var
var vars = 'vars';
console.log(vars);
vars = 'vars2';
console.log(vars);

// define a const arrow function and defined the parameter type
const circ = (diameter:number) => {
    return diameter * Math.PI;
}

console.log("circ:", circ(3.1415926));

// arrays -> defines type in initial behavior too
let names = ['luiqui', 'mario', 'yoshi'];
names.push('tod');
// error -> names.push(3);
let numbers = [20, 30, 40];
numbers.push(25);
// error -> numbers.push('shaun');
// mixed arrays types
let mixed = [10, 4, 'str', '#'];
console.log("mixed:", mixed);
mixed.push("name");
mixed.push(9);
mixed[0] = 'strTest';

// Objects -> needs to have the same structure and each properties must be the same as it defined
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}
ninja.age = 40;
// error -> ninja.age = 'str';
ninja.name = 'ryu';
// error cannot add properties -> ninja.skills = ['fighting', 'sneaking'];
console.log("ninja: ", ninja);

// explicit types with a lot of types
let str: string;
let ages: number;
let isLogin: boolean;
let any: any;
let obj: object;
let arr: string[] = [];
any = [];
obj = [];
obj = {};
arr.push('3');
console.log("arr: ", arr);

// union types
let mixedArr: (string|number|boolean)[] = [];
mixedArr.push(true);
mixedArr.push("arr");
mixedArr.push(3);
console.log("mixedArr: ", mixedArr);

// objects
let ninjaOne: Object;
ninjaOne = {name:'yoshi', age:30};
ninjaOne = []; // array is an Object
let ninjaTwo: {name:string, age:number, beltColor:string};
ninjaTwo = {
    name: 'two',
    age:20,
    beltColor:'balck'
}
console.log("ninjaTwo: " + ninjaTwo);

// change the types
let agee:any = 12;
agee = 25;
agee = 'agee';
agee = true;
console.log("agee: ", agee);
let mixedArrr: any[] = [];
mixedArrr.push(false);
mixedArrr.push(23);
mixedArrr.push("string");
console.log("mixedArrr: ", mixedArrr);

let anyNinja = {name:any, age:any};
anyNinja = {name:'nj', age:23}
console.log('anyNinja: ', anyNinja);
anyNinja = {name:23, age:'nj'};
console.log('anyNinja: ', anyNinja);

console.log("get here");
// function type
let greet = () => {
    console.log('hello world');
}
// error -> already a function type-> greet = 'hello';
let greetFunc: Function;
greetFunc = () => {
    console.log('hello again!');
}

const add = (a:number, b:number) => {
    console.log(a + b);
}
add(3, 2);
const addd = (a:any, b:any) => {
    console.log(a + b);
}
addd('str: ', false);
const adddd = (a:number, b:number, c?:any) => {
    console.log(a+b+c);
}
adddd(3,2,'str');
adddd(7,8);

const minus = (a:number, b:number):number => {
    return a+b;
}
let result = minus(10, 7);

// type aliases
type StrOrNum = string | number;
let strrr:StrOrNum;
let nummm:StrOrNum;

// example
let gree: (a:string, b:string) => void;
gree = (name:string, greeting:string) => {
    console.log(`${name} says ${greeting}`);
}
gree('mario', 'greeting');

let calc: (a:number, b:number, c:string) => number;
calc = (numOne:number, numTwo:number, action:string) => {
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return 0;
    }
}
console.log('calc', calc(0, 1, 'add'));

let logDetails:(obj:{name:string, age:number}) => void;
logDetails = (ninja:{name:string, age:number}) => {
    console.log('ninja_name: ', ninja.name, 'ninja_age: ', ninja.age);
}
logDetails({name:'mario', age:30});

// The DOM & Type Casting
