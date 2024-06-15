const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const allResults = await Promise.all(items.map(async (item) => {}));