#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { getRandomInt, hideRandomElement } from '../src/game-utils.js';

const generateProgression = (start, step, length) => {
    return Array.from({ length }, (_, i) => start + step * i);
};

const generateQuestion = () => {
    const start = getRandomInt(1, 50);
    const step = getRandomInt(1, 10);
    const length = getRandomInt(5, 15);
    const progression = generateProgression(start, step, length);

    return hideRandomElement(progression);
};

const gameRules = 'What number is missing in the progression?';

runGame(gameRules, generateQuestion);