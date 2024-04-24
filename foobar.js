const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const currentDate = () => new Date().toLocaleDateString('en-US');
console.log(typeof typeof 1);