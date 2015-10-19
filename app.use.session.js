var session = require("express-session");
var redis = require("redis"),
    client = redis.createClient();

var RedisStore = require('connect-redis')(session);
app.use(session({
    store: new RedisStore({
			client: client,
			host: "localhost",
			port: 6379,
			serializer: JSON,
		}),
    secret: 'keyboard cat',
		resave: true,
		saveUninitialized: false,
}));
