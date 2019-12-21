module.exports={
    db_config:{
        client: 'mssql',
        connection: {
          user: 'sa',
          password: '123',
          server: 'localhost',
          port: 1433,
          database: 'dipiper',
          pool: {
              min: 0,
              max: 10,
              idleTimeoutMillis: 3000
          }
        }
    }
}