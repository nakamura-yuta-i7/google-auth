var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
	var user = []
	var data = {
		siteName: "Oauth Login Demo",
		loggedin: ( req.user ? true : false ),
		title: 'Home',
	};
	
	res.render('index', data);
});

router.get('/login', function(req, res, next) {
	console.log( __filename, "req.user:", req.user );
	console.log( __filename, "req.session:", req.session );
	var user = []
	var data = {
		siteName: "Oauth Login Demo",
		loggedin: ( req.user ? true : false ),
		title: 'Login',
	};
	
	res.render('index_login', data);
});

router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
