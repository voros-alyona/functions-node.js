const repositoryRootPath = path.resolve(__dirname, '..');
const goToTop = () => window.scrollTo(0, 0);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;