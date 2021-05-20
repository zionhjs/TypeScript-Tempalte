import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
import { ListTemplate } from "./classes/ListTemplate";
import { HasFormatter } from "./interfaces/HasFormatter";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values:[string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});

// GENERICS 就是用<T>
const addUID = <T extends {name:string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);
// Generic 可以超出范围
let docTwo = addUID({name: 'mario', age:30, height: 176});
console.log(docTwo);

// Enums
enum ResourceType{
    BOOK,
    AUTHOR,
    DIRECTOR,
    PERSON
}

// Generics with Interface
interface Resource<T>{
    uid: number;
    resourceType: ResourceType;
    data: T;
}
const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {name: 'shawn'}
}
const docFour: Resource<any> = {
    uid:2,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk', 'toilet roll']
}
console.log(docThree, docFour);

// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let student: [string, number];
student = ['chun-li', 225423];



