// some initial test:
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//     console.log(input);
// });
var character = 'mario';
var age = 24;
var isBlackBelt = false;
// can change the value of var
var vars = 'vars';
console.log(vars);
vars = 'vars2';
console.log(vars);
// define a const arrow function and defined the parameter type
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log("circ:", circ(3.1415926));
// arrays -> defines type in initial behavior too
var names = ['luiqui', 'mario', 'yoshi'];
names.push('tod');
// error -> names.push(3);
var numbers = [20, 30, 40];
numbers.push(25);
// error -> numbers.push('shaun');
// mixed arrays types
var mixed = [10, 4, 'str', '#'];
console.log("mixed:", mixed);
mixed.push("name");
mixed.push(9);
mixed[0] = 'strTest';
// Objects -> needs to have the same structure and each properties must be the same as it defined
var ninja = {
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
var str;
var ages;
var isLogin;
var any;
var obj;
var arr = [];
any = [];
obj = [];
obj = {};
arr.push('3');
console.log("arr: ", arr);
// union types
var mixedArr = [];
mixedArr.push(true);
mixedArr.push("arr");
mixedArr.push(3);
console.log("mixedArr: ", mixedArr);
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // array is an Object
var ninjaTwo;
ninjaTwo = {
    name: 'two',
    age: 20,
    beltColor: 'balck'
};
console.log("ninjaTwo: " + ninjaTwo);
// change the types
var agee = 12;
agee = 25;
agee = 'agee';
agee = true;
console.log("agee: ", agee);
var mixedArrr = [];
mixedArrr.push(false);
mixedArrr.push(23);
mixedArrr.push("string");
console.log("mixedArrr: ", mixedArrr);
var anyNinja = { name: any, age: any };
anyNinja = { name: 'nj', age: 23 };
console.log('anyNinja: ', anyNinja);
anyNinja = { name: 23, age: 'nj' };
console.log('anyNinja: ', anyNinja);
console.log("get here");
// function type
var greet = function () {
    console.log('hello world');
};
// error -> already a function type-> greet = 'hello';
var greetFunc;
greetFunc = function () {
    console.log('hello again!');
};
var add = function (a, b) {
    console.log(a + b);
};
add(3, 2);
var addd = function (a, b) {
    console.log(a + b);
};
addd('str: ', false);
var adddd = function (a, b, c) {
    console.log(a + b + c);
};
adddd(3, 2, 'str');
adddd(7, 8);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
var strrr;
var nummm;
// example
var gree;
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
gree('mario', 'greeting');
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return 0;
    }
};
console.log('calc', calc(0, 1, 'add'));
var logDetails;
logDetails = function (ninja) {
    console.log('ninja_name: ', ninja.name, 'ninja_age: ', ninja.age);
};
logDetails({ name: 'mario', age: 30 });
// The DOM & Type Casting
