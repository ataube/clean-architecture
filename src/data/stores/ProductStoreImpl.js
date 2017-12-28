
function ProductStoreImpl(pgClient) {
  async function createProduct(product) {
    try {
      const query = {
        text: 'INSERT INTO product(sku, brand, description) VALUES($1, $2, $3) RETURNING *',
        values: [
          product.sku,
          product.brand,
          product.description
        ],
      }
      await pgClient.query('BEGIN');
      const { rows: [row] } = await pgClient.query(query);
      await pgClient.query('COMMIT');

      return {
        id: row.id,
        sku: row.sku,
        brand: row.brand,
        description: row.description,
        createdAt: row.created_at
      };
    } catch(e) {
      // TODO use logger
      console.log('>>>', e)
      await pgClient.query('ROLLBACK');
    }
  }

  return {
    createProduct
  }
}

module.exports = ProductStoreImpl;