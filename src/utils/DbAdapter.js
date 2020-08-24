const knex = require("knex");

module.exports = class DbAdapter {
    constructor(options) {
        if (options) this.context = knex(options);
        else {
            let config = require("../common/config");
            let env = process.env.NODE_ENV;
            switch (env) {
                case "dev":
                    this.context = knex(config.dev.db_config);
                    break;
                default:
                    this.context = knex(config.pro);
                    break;
            }
        }
    }
};
