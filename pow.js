const isTabInView = () => !document.hidden;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);