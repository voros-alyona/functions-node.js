const merge = Object.assign({}, obj1, obj2);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const isWeekday = (date) => date.getDay() % 6 !== 0;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();