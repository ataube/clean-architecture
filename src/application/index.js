const pgProductStore = require('./stores/pgProductStore');
const pgEventStore = require('./stores/pgEventStore');
const pgTransactionStore = require('./stores/pgTransactionStore');

const eventPublisher = require('./integration/eventPublisher');

module.exports = {
  stores: {
    pgProductStore,
    pgEventStore,
    pgTransactionStore
  },
  eventPublisher
};
