const { struct } = require('superstruct');

class Event {
  constructor(obj) {
    Object.assign(this, Event.struct(obj));
  }

  static create(obj) {
    return new Event(obj);
  }

  static get struct() {
    return struct(
      {
        id: 'number',
        type: 'string',
        payload: 'object',
        createdAt: 'date'
      },
      {
        createdAt: new Date()
      }
    );
  }
}

module.exports = Event;
