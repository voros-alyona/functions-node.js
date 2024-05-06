const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const results = await Promise.all(resultingPromises);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';