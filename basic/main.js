// number, string, boolean, null, undefined
let age = 2;
let num = '2';

let obj = {
    name : 'ellie',
    age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('-----');
console.log(obj.name);
console.log(obj2.name);

// let은 수정가능, const는 변경불가
