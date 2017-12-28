const assert = require('assert');
function CreateProductUseCase(productInteractor) {
  assert.ok(productInteractor);

  return productData => productInteractor.createProduct(productData);
}

module.exports = CreateProductUseCase;
