const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const repositoryRootPath = path.resolve(__dirname, '..');