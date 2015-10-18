var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log( req.user );
	var user = []
	var data = { title: 'Express' };
	
	res.render('index', data);
});

module.exports = router;
