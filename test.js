const main = require('./src/main.js');

(async () => {
  const domain = main({
    appName: 'cleanarch',
    dbUrl: 'postgres://postgresql@localhost:5432/cleanarch'
  });

  await domain.init();

  try {
    await domain.useCases.createProductUseCase({
      sku: 'ABC-123',
      brand: 'brand1',
      description: 'my desc'
    });
  } catch (e) {
    console.log('err', e);
    process.exit(1);
  }
})();
