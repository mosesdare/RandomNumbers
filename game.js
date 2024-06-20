import playGame from "./gameBackend.js";
import read from "readline-sync"

const guessNumber = read.question("Please enter a number between 1 and 10: ")
const realNumber = playGame();

while(guessNumber != realNumber){
    const realNumber = playGame();
    const guessNumber = read.question("Please enter a number between 1 and 10: ")
    console.log(`You guessed wrongly, The answer is: ${realNumber}`);
}
console.log(`You guessed correct, The answer is: ${realNumber}`);

