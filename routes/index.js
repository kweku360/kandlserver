var express = require('express');
var router = express.Router();
var tusServer = require("../tusserver/server")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/api/upload', tusServer.handle.bind(tusServer));


module.exports = router;
