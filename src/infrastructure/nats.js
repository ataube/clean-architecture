const log = require('../log')('nats');

/**
 * NATS Fake Client
 * https://nats.io/
 */
function natsClient() {
  return {
    publishEvent: event => {
      log.info('Publish event %o', event);
    }
  };
}

module.exports = natsClient;
