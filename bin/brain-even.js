import readlineSync from "readline-sync";
import getUserName from "../src/cli.js";

const getNumber = () => {
    return Math.floor(Math.random() * 100);
}

export const isEven = () => {
    const userName = getUserName();
    const byeText = `Let's try again, ${userName}!`;
    const congratsText = `Congratulations, ${userName}!`;

    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

    for (let i = 0; i < 3; i += 1) {
        const questionNumber = getNumber();
        console.log(`Question: ${questionNumber}`);
        const userAnswer = readlineSync.question("Answer: ");

        if (questionNumber % 2 === 0) {
            if (userAnswer === "yes") {
                console.log("Correct!");
            } else {
                console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"yes\".`);
                return console.log(byeText)
            }
        }

        if (questionNumber % 2 !== 0) {
            if (userAnswer === "no") {
                console.log("Correct!");
            } else {
                console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"no\".`);
                return console.log(byeText);
            }
        }
    }

    console.log(congratsText);
}

isEven();