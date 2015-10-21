$(function onRendering() {
	app.Window.setPopStateEvent();
	app.Window.setPushStateEvent();
	app.GlobalNavi.setClickEvent();
});

(function setGlobal() {
	app = {};
})();

(function() {
	var config = app.config = {};
	config.PORT = window.location.port;
})();

(function() {
	var Window = app.Window = {};
	Window.setPopStateEvent = function() {
		$(window).on('popstate', function(e){
			console.log( "window.on.popstate e:", e );
			if (!e.originalEvent.state) return; // 初回アクセス時に再読み込みしてしまう対策
		});
	}
	Window.setPushStateEvent = function() {
		$(window).on('pushstate', function(e){
			console.log( "window.on.pushstate e:", e );
		});
	}
})();

(function() {
	app.Socket = {};
	var socket = app.Socket.default = io('http://localhost:' + app.config.PORT);
	
	socket.on('connection', function (data) {
		console.log( "socket.on.connection socket.id", socket.id );
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

(function() {
	var Url = app.Url = {};
	Url.update = function(url) {
		history.replaceState('','',url);
	}
	Url.pushHistory = function(url) {
		history.pushState('','',url);
	}
	Url.move = function(url) {
		location.href = url;
	}
})();

(function() {
	var GlobalNavi = app.GlobalNavi = {};
	var area = $("#nav-mobile");
	
	GlobalNavi.setClickEvent = function() {
		$(document).on("click", area.find("a").selector, function(e) {
			e.preventDefault();
			var href = $(this).attr("href");
			app.Url.pushHistory(href);
		});
	}
})();
