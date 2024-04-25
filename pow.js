const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const channelName = getChannelName(channel);