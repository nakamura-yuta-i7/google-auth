var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log( __filename, "req.user:", req.user );
	console.log( __filename, "req.session:", req.session );
	var user = []
	var data = { title: 'Express' };
	
	res.render('index', data);
});

module.exports = router;
