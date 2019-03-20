// server.js
console.log(`Your port is ${process.env.DBPORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.DBHOST}`); // 8626
console.log(`Your port is ${process.env.DBPORT}`); // 8626