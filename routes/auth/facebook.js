var express = require('express');
var router = express.Router();

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = "1002396523145816";
var FACEBOOK_APP_SECRET = "a2622c327f7ce3ac3832a5d4ea397ba7";

passport.use(new FacebookStrategy({
		clientID: FACEBOOK_APP_ID,
		clientSecret: FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost:3000/auth/facebook/callback",
		enableProof: false
	},
	function(accessToken, refreshToken, profile, done) {
		// User.findOrCreate({ facebookId: profile.id }, function (err, user) {
		//   return done(err, user);
		// });
		console.log('accessToken: ', accessToken);
		console.log('refreshToken: ', refreshToken);
		console.log('profile: ', profile);
		
		return done(null, profile._json);
	}
));

router.get('/', passport.authenticate('facebook'));

router.get('/callback', passport.authenticate('facebook', {
	failureRedirect: '/login'
}), function(req, res) {
	// Successful authentication, redirect home.
	res.redirect('/');
});

module.exports = router;
