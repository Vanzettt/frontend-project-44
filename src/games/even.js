import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default function playEvenGame(answers = null) {
  console.log('Welcome to the Brain Games!');
  
  // Получаем имя - только если не в режиме тестирования
  const name = answers !== null ? 'TestUser' : readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  let correctAnswers = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    
    // Получаем ответ - из массива или от пользователя
    let userAnswer;
    if (answers !== null && i < answers.length) {
      userAnswer = answers[i].toLowerCase().trim();
      console.log(`Your answer: ${userAnswer}`); // Имитируем ввод для тестов
    } else {
      userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();
    }

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    correctAnswers++;
  }

  if (correctAnswers === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
  return true;
}