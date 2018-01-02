const assert = require('assert');

function productStore(adapter) {
  assert.ok(adapter);

  /**
   * Creates a new product
   * @param {Product} product
   * @param {Object} options
   * @returns {number} the product id
   */
  async function createProduct(product, { trx }) {
    assert.ok(product.constructor.name === 'Product');
    return adapter.createProduct(product, { trx });
  }

  return {
    createProduct
  };
}

module.exports = productStore;
