// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable
// let (added in ES6) 
let globalName = 'global name'; // 글로벌 변수

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);

} // 블럭 방식

// var (don`t ever use this!) -> var쓰지 않기 (등짝 ?)
// var hoisting (move declareation from bottom to top) 어디에 선언하던지 상관없이 제일 위로 선언을 끌어 올려주다.
// has no block scope (블럭 스콥이 없다.)
{
    age = 4;
    var age;
}
console.log(age); // 블럭 밖에서도 보일 수 있다.

// 3. Contants 값이 선언되면 절대 값이 바뀌지 않는다.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined (더의상 나눌 수 없는 타입)
// object, box container
// funcion, first-class funtion

const count = 17; // integer
const size = 17.1; // decimal number
console.log('value: ${const}, type: ${typeod count}');
console.log('value: ${size}, type: ${typeof size}');

// number - speicla numeric values: infinity, -infinity
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn= 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 새롭게 추가된 
// BigInt (fairly new, don`t use it yet)

