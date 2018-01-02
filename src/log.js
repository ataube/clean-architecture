const debug = require('debug');

const pkg = require('../package.json');

const LOG_LEVELS = ['trace', 'debug', 'info', 'warning', 'error', 'fatal'];

function createLogger(nameSpace, level) {
  return debug([pkg.name, nameSpace, level].join(':'));
}

function log(namespace) {
  const logger = {};

  LOG_LEVELS.forEach(level => {
    logger[level] = createLogger(namespace, level);
  });

  return logger;
}

module.exports = log;
