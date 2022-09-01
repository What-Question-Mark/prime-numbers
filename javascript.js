const number = 1 
let flag = False

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        flag = True;
        break;
    }
}

if (flag) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is a not prime number`);
}
