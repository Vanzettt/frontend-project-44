import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default function playEvenGame(answers = []) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  let answerIndex = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    
    const userAnswer = answers.length > 0 
      ? answers[answerIndex++] 
      : readlineSync.question('Your answer: ').toLowerCase().trim();
    
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return true;
}