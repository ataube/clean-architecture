const assert = require('assert');
const { types } = require('../events');

function productInteractor(entities, productStore, events) {
  assert.ok(entities);
  assert.ok(productStore);
  assert.ok(events);

  async function createProduct(productData) {
    const product = entities.Product.create(productData);
    const newProduct = await productStore.createProduct(product);
    events.emit(types.PRODUCT_CREATED, entities.Product.create(newProduct));
    return newProduct.id;
  }

  return {
    createProduct
  };
}

module.exports = productInteractor;
