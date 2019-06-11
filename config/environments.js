const environments = {
    development: {
      mysql: {
        username: 'root',
        password: 'root',
        database: 'howto_db_dev'
      }
    },
  
    test: {
      mysql: {
        username: 'root',
        password: 'howto@@',
        database: 'ex_nodejs_db'
      }
    },
  
    production: {
  
    }
  }
  
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  module.exports = environments[nodeEnv];