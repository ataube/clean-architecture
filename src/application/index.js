const pgProductStore = require('./stores/pgProductStore');
const pgEventStore = require('./stores/pgEventStore');
const pgTransactionStore = require('./stores/pgTransactionStore');

module.exports = {
  stores: {
    pgProductStore,
    pgEventStore,
    pgTransactionStore
  }
};
