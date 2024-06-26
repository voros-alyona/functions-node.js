const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const goToTop = () => window.scrollTo(0, 0);