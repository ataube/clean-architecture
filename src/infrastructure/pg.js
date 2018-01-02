const pg = require('pg');
const pgConnectionParse = require('pg-connection-string');

function connect({ appName, dbUrl, sslRootCert, clientOptions = {} }) {
  if (!appName) {
    throw new Error('The appName property must be defined');
  }
  const parsedUrl = dbUrl ? pgConnectionParse.parse(dbUrl) : {};
  const configuration = Object.assign({}, clientOptions, parsedUrl, {
    application_name: appName
  });

  if (sslRootCert) {
    configuration.ssl = {
      rejectUnauthorized: true,
      ca: sslRootCert
    };
  }

  const client = new pg.Client(configuration);
  const pool = new pg.Pool(configuration);

  return {
    configuration,
    client,
    pool
  };
}

module.exports = connect;
