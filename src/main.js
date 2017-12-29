const domain = require('./domain');
const data = require('./data');

function init(config) {
  const { client } = data.driver.pg({
    appName: config.appName,
    dbUrl: config.dbUrl
  });

  const { entities, events } = domain;
  const eventBus = events.domainEventBus;

  /**
   * Data: Stores
   */
  const pgProductStore = data.stores.pgProductStore(client);

  /**
   * Domain: Stores
   */
  const productStore = domain.stores.productStore(pgProductStore);

  /**
   * Domain: Interactors
   */
  const productInteractor = domain.interactors.productInteractor(
    entities,
    productStore,
    eventBus
  );

  /**
   * Domain: UseCases
   */
  const createProductUseCase = domain.useCases.createProductUseCase(
    productInteractor
  );

  return {
    useCases: {
      createProductUseCase
    },
    eventBus,
    connect: () => client.connect()
  };
}

module.exports = init;
