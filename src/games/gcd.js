import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

const generateRound = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));

    return [question, correctAnswer];
};

const runGcdGame = () => {
    runGame(description, generateRound);
};

export default runGcdGame;