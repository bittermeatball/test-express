var mysql = require('mysql');
var config = require('../config')
// Create connection
module.exports = mysql.createPool(config.database);
