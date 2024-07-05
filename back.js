console.log( "A" - "B" + "2");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const merge = (a, b) => a.concat(b);