const domain = require('./domain');
const application = require('./application');
const infrastructure = require('./infrastructure');

function init(config) {
  const { pool } = infrastructure.driver.pg({
    appName: config.appName,
    dbUrl: config.dbUrl
  });

  const { entities, events } = domain;
  const eventBus = events.domainEventBus;

  /**
   * Application: Stores
   */
  const pgTransactionStore = application.stores.pgTransactionStore(pool);
  const pgProductStore = application.stores.pgProductStore(pool);
  const pgEventStore = application.stores.pgEventStore(pool);

  /**
   * Domain: Stores
   */
  const productStore = domain.stores.productStore(pgProductStore);
  const eventStore = domain.stores.eventStore(pgEventStore);

  /**
   * Domain: Interactors
   */
  const productInteractor = domain.interactors.productInteractor(
    entities,
    pgTransactionStore,
    productStore,
    eventStore,
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
    eventBus: {
      on: (event, listener) => {
        eventBus.on(event, obj => listener(Object.assign({}, obj)));
      }
    }
  };
}

module.exports = init;
