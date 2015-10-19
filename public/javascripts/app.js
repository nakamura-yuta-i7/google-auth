(function setGlobal() {
	app = {};
})();

(function() {
	var config = app.config = {};
	config.PORT = window.location.port;
})();

(function() {
	app.Socket = {};
	var socket = app.Socket.default = io('http://localhost:' + app.config.PORT);
	
	socket.on('connection', function (data) {
		console.log( "socket.on.connection socket.id", socket.id );
		console.log(data);
	});
	
	socket.on('news', function (data) {
		console.log( "socket.on.news socket.id", socket.id );
		console.log(data);
	});
	
	socket.emit('greeting', {
		msg: "Hi.",
	});
	
	socket.on('greeting', function (data) {
		console.log( "socket.on.greeting", data );
		console.log(data);
	});
})();
