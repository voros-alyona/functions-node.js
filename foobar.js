const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
var regexp  = new RegExp('{{([^}]+)}}', 'g');