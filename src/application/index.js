const pgProductStore = require('./stores/pgProductStore');
const pgTransactionStore = require('./stores/pgTransactionStore');
module.exports = {
  stores: {
    pgProductStore,
    pgTransactionStore
  }
};
