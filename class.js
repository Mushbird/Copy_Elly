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

//const ellie = new Person('ellie', 20);
// console.log(eliie.name);
// console.log(ellie.age);
// ellie.speak(); 

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

//const user1 = new User('Alex', 'Job', -1);
//console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicFeild = 2;
    #privateField = 0; // 최신 코드 (아직 쓰기에는 무리)
}
//const experiment = new Experiment();
//console.log(experiment.publicFeild);
//console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

//const article1 = new Article();
//const article2 = new Article();
//console.log(article1.publisher);

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log('drawing ${this.color} color of');
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('so');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
//rectangle.draw();
//console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
//triangle.draw();
//console.log(triangle.getArea()); 

// 6. Class checking : istanceOf
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true;
console.log(triangle instanceof Shape);         // true;
console.log(triangle instanceof Object);        // true; 


