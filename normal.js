const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);