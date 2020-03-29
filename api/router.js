var express = require('express');
var router = express.Router();

const config = require('../config')
const fs = require('fs');

fs.readdir( config.modules_dir, (err, files) => {
  files.forEach(file => {
    try {
      let routerModule = require(`${config.modules_dir}/${file}/router/index.js`)
      router.use(routerModule)
    }
    catch (error) {
      if (error.code == "MODULE_NOT_FOUND")
        console.error(`There is no router module in ${file}`)
    }
  });
});

router.get('/', function(req, res, next) {
  res.status(200).json({
    message: "API function normally"
  })
});

module.exports = router;
