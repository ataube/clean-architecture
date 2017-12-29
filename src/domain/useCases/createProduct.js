const assert = require('assert');

function createProductUseCase(productInteractor) {
  assert.ok(productInteractor);

  return productData => productInteractor.createProduct(productData);
}

module.exports = createProductUseCase;
