const assert = require('assert');

function ProductStore(adapter) {
  assert.ok(adapter);

  /**
   * Creates a new product
   * @param {Product} product
   * @returns {number} the product id
   */
  async function createProduct(product) {
    assert.ok(product.constructor.name === 'Product');
    return adapter.createProduct(product);
  }

  return {
    createProduct
  };
}

module.exports = ProductStore;
