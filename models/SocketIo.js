module.exports = function (server) {
	
	var io = require('socket.io')(server);
	var redis = require('socket.io-redis');
	io.adapter(redis({ host: 'localhost', port: 6379 }));

	io.on('connection', function (socket) {
		
		socket.emit("connection", {
			socket_id: socket.id,
			msg: "connect",
		});
		console.log( __filename, "socket.io connection id:", socket.id );
		
		socket.on('greeting', function (data) {
			io.emit("greeting", data);
		});
	});
	
};
