const assert = require('assert');

function eventStore(adapter) {
  assert.ok(adapter);
  /**
   * Persists a given domain event
   * @param {string} type
   * @param {Object} event
   * @param {Object} options
   */
  async function createEvent(type, event, { trx }) {
    return adapter.createEvent(type, event, { trx });
  }

  /**
   * Markes a given event id as successfully published to
   * an integration message bus
   * @param {number} eventId
   */
  async function markEventAsPublished(eventId) {
    return adapter.markEventAsPublished(eventId);
  }

  return {
    createEvent,
    markEventAsPublished
  };
}

module.exports = eventStore;
