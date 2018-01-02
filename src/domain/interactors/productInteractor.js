const assert = require('assert');
const { types } = require('../events');

function productInteractor(
  entities,
  transactionStore,
  productStore,
  eventStore,
  eventBus
) {
  assert.ok(entities);
  assert.ok(transactionStore);
  assert.ok(productStore);
  assert.ok(eventStore);
  assert.ok(eventBus);

  async function createProduct(productData) {
    const product = entities.Product.create(productData);

    await transactionStore.query(async trx => {
      const newProduct = await productStore.createProduct(product, { trx });
      await eventStore.createEvent(types.PRODUCT_CREATED, newProduct, { trx });
      eventBus.emit(types.PRODUCT_CREATED, entities.Product.create(newProduct));
      return newProduct.id;
    });
  }

  return {
    createProduct
  };
}

module.exports = productInteractor;
