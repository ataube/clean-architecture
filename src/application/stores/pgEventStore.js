function pgEventStore(pgClient) {
  async function createEvent(type, payload, { trx }) {
    const client = trx || pgClient;
    const query = {
      text: 'INSERT INTO event(type, payload) VALUES($1, $2) RETURNING id',
      values: [type, payload]
    };
    return client.query(query).then(r => r.rows[0]);
  }

  async function markEventAsPublished(eventId) {
    const query = {
      text: 'UPDATE event SET published_at = now() WHERE id = $1',
      values: [eventId]
    };
    return pgClient.query(query).then(r => r.rows);
  }

  return {
    createEvent,
    markEventAsPublished
  };
}

module.exports = pgEventStore;
