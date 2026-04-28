// utils/logger.js
const logger = (message, level = 'info') => {
  console[level](`[${new Date().toISOString()}] ${level.toUpperCase()}: ${message}`);
};

module.exports = logger;
