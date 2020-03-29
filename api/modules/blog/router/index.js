var express = require('express');
var router = express.Router();

router.get('/blogs', function(req, res, next) {
  res.status(200).json({
    message: "Hello world from blogs"
  })
});

module.exports = router;
