const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(+"1" +  "1" + "2");
const copyToClipboard = (text) => navigator.clipboard.writeText(text);