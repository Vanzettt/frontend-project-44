export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const hideRandomElement = (array) => {
    const hiddenIndex = getRandomInt(0, array.length - 1);
    const answer = String(array[hiddenIndex]);
    const question = array
        .map((item, index) => (index === hiddenIndex ? '..' : item))
        .join(' ');
    return { question, answer };
};