const { EventEmitter } = require('events');

const types = {
  PRODUCT_CREATED: 'PRODUCT_CREATED'
};

class DomainEventBus extends EventEmitter {}

module.exports = {
  types,
  domainEventBus: new DomainEventBus()
};
