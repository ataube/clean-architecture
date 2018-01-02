const log = require('../../log')('application:pgTransactionStore');

function pgTransactionStore(pgPool) {
  async function query(transactionScope) {
    const pgClient = await pgPool.connect();
    try {
      await pgClient.query('BEGIN');
      const result = await transactionScope(pgClient);
      await pgClient.query('COMMIT');
      return result;
    } catch (e) {
      log.error('Error executing transaction scope', e);
      await pgClient.query('ROLLBACK');
      throw e;
    } finally {
      pgClient.release();
    }
  }

  return {
    query
  };
}

module.exports = pgTransactionStore;
