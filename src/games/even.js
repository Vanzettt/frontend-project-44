import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const isEven = (num) => num % 2 === 0;

export default function playEvenGame() {
    const name = greetUser(); // Теперь получаем имя из greetUser
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;
    const roundsToWin = 3;

    while (correctAnswers < roundsToWin) {
        const number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}