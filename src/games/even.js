// even-game.js
const isEven = (num) => num % 2 === 0;

// Версия для автоматических тестов (без readlineSync)
export function playEvenGameAuto(answers) {
  let name = 'TestUser';
  let correctAnswers = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number = Math.floor(Math.random() * 100);
    const userAnswer = answers[i].toLowerCase().trim();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      return false;
    }
    correctAnswers++;
  }

  return correctAnswers === roundsCount;
}

// Версия для интерактивного режима
export function playEvenGameInteractive() {
  import('readline-sync').then(readlineSync => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const roundsCount = 3;
    let correctAnswers = 0;

    for (let i = 0; i < roundsCount; i++) {
      const number = Math.floor(Math.random() * 100);
      console.log(`Question: ${number}`);
      const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();
      const correctAnswer = isEven(number) ? 'yes' : 'no';

      if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        process.exit(1);
      }
      console.log('Correct!');
      correctAnswers++;
    }

    if (correctAnswers === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    }
  });
}

// bin/brain-games (отдельный файл) #!/usr/bin/env node
import { playEvenGameInteractive } from '../games/even-game.js';

playEvenGameInteractive();