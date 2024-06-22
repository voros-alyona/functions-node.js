const intermediateAppPath = path.join(buildOutputPath, 'app');
const merge = (a, b) => [...a, ...b];
const isEmptyObject = obj => Object.keys(obj).length === 0;