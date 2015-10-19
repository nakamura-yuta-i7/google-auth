var express = require('express');
var router = express.Router();

var passport = require('passport');
var OpenidConnectStrategy = require('passport-openidconnect').Strategy;
passport.use(new OpenidConnectStrategy({
	authorizationURL: "https://accounts.google.com/o/oauth2/auth",
	tokenURL: "https://accounts.google.com/o/oauth2/token",
	userInfoURL: "https://www.googleapis.com/oauth2/v1/userinfo",
	clientID: "1078682429860-o57aiqkfb5vhoijtgsr4ga7dpesnj7sm.apps.googleusercontent.com",
	clientSecret: "us4t9lqLRPBRZ0d1-Xcp3EsX",
	callbackURL: "http://localhost:3000/auth/google/callback",
	scope: ["openid", "email", "profile" ]
}, function(accessToken, refreshToken, profile, done) {
	console.log('accessToken: ', accessToken);
	console.log('refreshToken: ', refreshToken);
	console.log('profile: ', profile);
	
	return done(null, profile._json);
}));


router.get('/', passport.authenticate('openidconnect'));

router.get('/callback', passport.authenticate('openidconnect', {
  failureRedirect: '/login'
}), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

module.exports = router;
