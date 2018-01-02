const main = require('./src/main.js');

(async () => {
  const domain = main({
    appName: 'cleanarch',
    dbUrl: 'postgres://postgresql@localhost:5432/cleanarch'
  });

  try {
    domain.eventBus.on('PRODUCT_CREATED', p => {
      console.log('>>> PRODUCT_CREATED:', p);
    });

    await domain.useCases.createProductUseCase({
      sku: 'ABC-123',
      brand: 'brand1',
      description: 'my desc'
    });
    process.exit(0);
  } catch (e) {
    console.log('err', e);
    process.exit(1);
  }
})();
