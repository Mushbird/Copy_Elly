// Objects
// one of the JavaScript`s data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// const ellie = { name: 'ellie', age: 4 };

// 1. Literals and properties
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age:'4' };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
delete ellie.hasJob = true;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);