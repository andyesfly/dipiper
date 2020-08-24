module.exports = {
    dev: {
        db_config: {
            client: "mssql",
            connection: {
                user: "sa",
                password: "123",
                server: "localhost",
                port: 1433,
                database: "MockTrading",
                pool: {
                    min: 0,
                    max: 10,
                    idleTimeoutMillis: 3000
                }
            }
        }
    },
    pro: {}
};
