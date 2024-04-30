const results = await Promise.all(resultingPromises);
const isWeekday = (date) => date.getDay() % 6 !== 0;