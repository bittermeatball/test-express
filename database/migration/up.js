var db = require("../connection")
var fs = require('fs')
var config = require('../../config')

function up() {
    fs.readdir( config.modules_dir, (err, files) => {
        // If can't get to modules directory
        if (err) {
            console.error(err);
        } else {
            // After getting to modules directory
            // Read each of their migration sql file
            files.forEach(file => {
                fs.readFile(`${config.modules_dir}/${file}/database/migration/up.sql`, (err, sql) => {
                    // If can't find any sql file
                    if (err) {
                        if (err.code == "ENOENT") {
                            console.error(`Migrated in ${file} module failed! No .sql file found!`);
                        } else {
                            // If it's other kind of errors, print it out
                            console.error(err);
                        };
                    }
                    // If there's an sql string, use it to query
                    if (sql) {
                        // The collected sql is <Buffer>, so it must be converted to <String>
                        db.query(sql.toString(),
                            (error) => {
                                // Callback for query
                                if (error) throw error;
                                console.log(`Migrated in ${file} module successfully!`)
                            }
                        )
                    }
                });
            });
        }
    });
};

up();
