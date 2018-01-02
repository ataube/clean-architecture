const Product = require('./entities/Product');
const Event = require('./entities/Event');
const productInteractor = require('./interactors/productInteractor');
const productStore = require('./stores/productStore');
const eventStore = require('./stores/eventStore');
const createProductUseCase = require('./useCases/createProduct');
const events = require('./events');

module.exports = {
  events,
  entities: {
    Product,
    Event
  },
  interactors: {
    productInteractor
  },
  stores: {
    productStore,
    eventStore
  },
  useCases: {
    createProductUseCase
  }
};
