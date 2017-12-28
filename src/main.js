const domain = require('./domain');
const data = require('./data');

function init(config) {
  const { client } = data.driver.pg({
    appName: config.appName,
    dbUrl: config.dbUrl
  });

  const entities = domain.entities;
  const eventBus = domain.events.domainEventBus;
  
  /**
   * Data: Stores
   */
  const productStoreAdapter = data.stores.ProductStoreImpl(client);

  /**
   * Domain: Stores
   */
  const productStore = domain.stores.ProductStore(productStoreAdapter);

  /**
   * Domain: Interactors
   */
  const productInteractor = domain.interactors.ProductInteractor(entities, productStore, eventBus);

  /**
   * Domain: UseCases
   */
  const createProductUseCase = domain.useCases.CreateProductUseCase(productInteractor);

  
  return {
    useCases: {
      createProductUseCase
    },
    eventBus,
    connect: () => client.connect()
  };
}

module.exports = init;
