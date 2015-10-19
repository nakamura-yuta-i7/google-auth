var passport = require('passport');

passport.serializeUser(function(user, done){
	console.log( "passport.serializeUser: ", user );
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	console.log( "passport.deserializeUser: " , obj );
	done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());
