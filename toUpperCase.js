const merge = [...new Set([...a, ...b])];
const isEven = (num) => num % 2 === 0;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;