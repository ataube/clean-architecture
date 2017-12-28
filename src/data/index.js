const pg = require('./pg');
const ProductStoreImpl = require('./stores/ProductStoreImpl');

module.exports = {
  stores: {
    ProductStoreImpl
  },
  driver: {
    pg
  }
}