'use strict'; // 모던하게~
// 6. 클레스와 오브젝트의 차이점
// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript Classes
//  - introduced in ES6
//  - syntactical sugar(문법성으로 달달한) over prototype-based ingeritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak () {
        console.log('${this.name} : hello!');
    }
}

const ellie = new Person('ellie', 20);
console.log(eliie.name);
console.log(ellie.age);
ellie.speak();


