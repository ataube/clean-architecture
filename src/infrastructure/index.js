const pg = require('./pg');
const nats = require('./nats');

module.exports = {
  clients: {
    pg,
    nats
  }
};
