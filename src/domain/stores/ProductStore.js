const assert = require('assert');

function ProductStore(adapter) {
  assert.ok(adapter);
  
  async function createProduct(product) {
    assert.ok(product.constructor.name === 'Product');
    return adapter.createProduct(product);
  }

  return {
    createProduct
  };
}

module.exports = ProductStore;
