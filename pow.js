const intermediateAppPath = path.join(buildOutputPath, 'app');
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffledArray = array.sort(() => Math.random() - 0.5); 