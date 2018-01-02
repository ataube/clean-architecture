const log = require('../../log')('application:eventPublisher');
const domain = require('../../domain');

const eventTypes = Object.keys(domain.events.types);

function eventPublisher(client, eventStore, eventBus) {
  async function publish(type, event) {
    log.info('Publish event type: %s with id: %s', type, event.id);
    await client.publishEvent(type, event);
    await eventStore.markEventAsPublished(event.id);
  }

  function listen() {
    eventTypes.forEach(key => {
      eventBus.on(key, event => publish(key, event));
    });
  }

  return {
    listen
  };
}
module.exports = eventPublisher;
