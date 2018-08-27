module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///reads'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};