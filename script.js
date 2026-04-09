console.log("Я загадал секретное число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10) + 1;

// console.log(secretNumber);

let attempts = 3;

while (attempts > 0) {

    let userNumber = Number(prompt("Введите число: "));
    let boolean = false;
    if (userNumber < secretNumber) {
        console.log("Секретное число больше");
        attempts = attempts - 1;
    } else if (userNumber === secretNumber) {
        console.log("Вы угадали!");
        attempts = attempts - 1;
        break;
    }

    else {
        console.log("Секретное число меньше");
    }
}





// for (let i = 1; i <= 7; i++) {
//     console.log("Привет");
// }



// let a = 0;

// while (a < 10) {
//     console.log("Привет!", a);
//     a++;

// }