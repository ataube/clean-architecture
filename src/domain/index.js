const Product = require('./entities/Product');
const productInteractor = require('./interactors/productInteractor');
const productStore = require('./stores/productStore');
const createProductUseCase = require('./useCases/createProduct');
const events = require('./events');

module.exports = {
  events,
  entities: {
    Product
  },
  interactors: {
    productInteractor
  },
  stores: {
    productStore
  },
  useCases: {
    createProductUseCase
  }
};
