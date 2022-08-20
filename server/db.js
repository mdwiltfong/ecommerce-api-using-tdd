const Pool = require('pg').pool

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "ecommerce-api"
});

module.exports = pool;