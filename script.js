// // create secretNumber
// let secretNumber = 8;

// // ask user for guess
// let stringGuess = prompt("Guess a number!");
// let guess = Number(stringGuess);

// // check guess
// if (guess === secretNumber) {
//     alert("YOU GOT IT RIGHT!");
// } else if (guess > secretNumber) {
//     alert("Too high. Guess again!");
// } else {
//     alert("Too low. Guess again!");
// };


let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
   maximum = parseInt(prompt("Enter a valid number"));
};

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1; 

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++; 
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
console.log(`You got it! It took you ${attempts} guesses`);