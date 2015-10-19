include = function (path) {
	var fs = require("fs");
	var vm = require("vm");
	var code = fs.readFileSync(path, 'utf-8');
	eval(code);
}
