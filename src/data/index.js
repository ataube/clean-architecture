const pg = require('./pg');
const pgProductStore = require('./stores/pgProductStore');

module.exports = {
  stores: {
    pgProductStore
  },
  driver: {
    pg
  }
};
