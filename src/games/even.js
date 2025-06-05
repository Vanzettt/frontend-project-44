import readlineSync from 'readline-sync';
import { greetUser } from '../cli.js';


const isEven = (num) => num % 2 === 0;

export default function playEvenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `).toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Выход с ошибкой (ненулевой код)
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  // Явный выход с успешным кодом (0)
  process.exit(0); // <- Важно для тестов!
}