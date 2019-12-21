const config = require('../common/config');
const knex = require("knex")({
    client: config.db_config.client,
    connection: config.db_config.connection
  });

let dbcontext = {
    insert:(data)=>{}
}

module.exports = dbcontext;