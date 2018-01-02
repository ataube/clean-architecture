function pgProductStore(pgClient) {
  async function createProduct(product, { trx }) {
    const client = trx || pgClient;
    try {
      const query = {
        text:
          'INSERT INTO product(sku, brand, description) VALUES($1, $2, $3) RETURNING *',
        values: [product.sku, product.brand, product.description]
      };
      const [row] = await client.query(query).then(r => r.rows);

      return {
        id: row.id,
        sku: row.sku,
        brand: row.brand,
        description: row.description,
        createdAt: row.created_at
      };
    } catch (e) {
      // TODO use logger
      console.log('>>>', e);
      await client.query('ROLLBACK');
      throw e;
    }
  }

  return {
    createProduct
  };
}

module.exports = pgProductStore;
