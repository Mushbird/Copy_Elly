// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
        return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('ellie');
    });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}