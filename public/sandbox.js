"use strict";
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
const circ = (diameter) => {
    return diameter * Math.PI;
};
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
};
ninja.age = 40;
// error -> ninja.age = 'str';
ninja.name = 'ryu';
// error cannot add properties -> ninja.skills = ['fighting', 'sneaking'];
console.log("ninja: ", ninja);
// explicit types with a lot of types
let str;
let ages;
let isLogin;
let any;
let obj;
let arr = [];
any = [];
obj = [];
obj = {};
arr.push('3');
console.log("arr: ", arr);
// union types
let mixedArr = [];
mixedArr.push(true);
mixedArr.push("arr");
mixedArr.push(3);
console.log("mixedArr: ", mixedArr);
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // array is an Object
let ninjaTwo;
ninjaTwo = {
    name: 'two',
    age: 20,
    beltColor: 'balck'
};
console.log("ninjaTwo: " + ninjaTwo);
// change the types
let agee = 12;
agee = 25;
agee = 'agee';
agee = true;
console.log("agee: ", agee);
let mixedArrr = [];
mixedArrr.push(false);
mixedArrr.push(23);
mixedArrr.push("string");
console.log("mixedArrr: ", mixedArrr);
let anyNinja = { name: any, age: any };
anyNinja = { name: 'nj', age: 23 };
console.log('anyNinja: ', anyNinja);
anyNinja = { name: 23, age: 'nj' };
console.log('anyNinja: ', anyNinja);
console.log("get here");
// function type
let greet = () => {
    console.log('hello world');
};
// error -> already a function type-> greet = 'hello';
let greetFunc;
greetFunc = () => {
    console.log('hello again!');
};
const add = (a, b) => {
    console.log(a + b);
};
add(3, 2);
const addd = (a, b) => {
    console.log(a + b);
};
addd('str: ', false);
const adddd = (a, b, c) => {
    console.log(a + b + c);
};
adddd(3, 2, 'str');
adddd(7, 8);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
let strrr;
let nummm;
// example
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
gree('mario', 'greeting');
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return 0;
    }
};
console.log('calc', calc(0, 1, 'add'));
let logDetails;
logDetails = (ninja) => {
    console.log('ninja_name: ', ninja.name, 'ninja_age: ', ninja.age);
};
logDetails({ name: 'mario', age: 30 });
// The DOM & Type Casting



