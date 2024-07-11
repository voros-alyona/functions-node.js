const results = await Promise.all(resultingPromises);
const resultingPromises = urls.map((url) => makHttpRequest(url));