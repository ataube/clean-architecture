const { struct } = require('superstruct');

class Product {
  constructor(obj) {
    Object.assign(this, Product.struct(obj));
  }

  static create(obj) {
    return new Product(obj);
  }

  static get struct() {
    return struct(
      {
        id: 'number?',
        sku: 'string',
        description: 'string',
        brand: 'string',
        createdAt: 'date'
      },
      {
        createdAt: new Date()
      }
    );
  }
}

module.exports = Product;
