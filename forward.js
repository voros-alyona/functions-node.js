const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);