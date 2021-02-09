// 1. String Concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // dubstract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
consolg.log(2 ** 3); // exponentiation(지수)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 증가 후 할당
// counter = counter + 1;
// preIncrement = counter;
console.log(`Increment : ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 할당 후 증가
// postIncrement = counter;
// counter = counter + 1;
console.log(`Increment : ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);  
// value1이 true면 value1에서 끝냄(value2 및 check는 실행되지 않음)

// && (and), finds
console.log(`and: ${value1 && value2 && check()}`);
// value1이 false value1에서 끝냄(value2 및 check는 실행되지 않음)

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('oh no');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else