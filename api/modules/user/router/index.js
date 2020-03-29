var express = require('express');
var router = express.Router();
const controller = require("../controllers/index");

router.get('/users', controller.index);

module.exports = router;
