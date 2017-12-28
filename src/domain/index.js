const Product = require('./entities/Product');
const ProductInteractor = require('./interactors/ProductInteractor');
const ProductStore = require('./stores/ProductStore');
const CreateProductUseCase = require('./useCases/CreateProduct');
const events = require('./events');

module.exports = {
  events,
  entities: {
    Product
  },
  interactors: {
    ProductInteractor
  },
  stores: {
    ProductStore
  },
  useCases: {
    CreateProductUseCase
  }
};
