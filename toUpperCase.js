const isEven = (num) => num % 2 === 0;
const updated = numbers.filter(element => element > 6);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);