const mysql = require('promise-mysql');

const dotenv = require('dotenv');

dotenv.config();

const config = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    connectionLimit: 100,
};

const pool = mysql.createPool(config);
console.log(config)
module.exports = pool

