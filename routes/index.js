var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log( __filename, "req.user:", req.user );
	console.log( __filename, "req.session:", req.session );
	var user = []
	var data = {
		siteName: "Oauth Login Demo",
		title: 'Home',
		loggedin: ( req.user ? true : false ),
	};
	
	res.render('index', data);
});

router.get('/login', function(req, res, next) {
	console.log( __filename, "req.user:", req.user );
	console.log( __filename, "req.session:", req.session );
	var user = []
	var data = {
		title: 'Oauth Login Demo'
	};
	
	res.render('index_login', data);
});

module.exports = router;
