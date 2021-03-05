'use strict';

// JavaScript is synchronous (정해진 순서에 맞게 진행)
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function prontInmmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기
printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}