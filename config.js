const path = require('path')
require('dotenv').config();

module.exports = {
    database: {
        host : process.env.DATABASE_HOST,
        port : process.env.DATABASE_PORT,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME
    },
    modules_dir: (path.join( __dirname , 'api', 'modules'))
};
