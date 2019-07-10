const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'jobhub',
    host: '127.0.0.1',
    dialect: 'mysql',
  }
};