include = function (path) {
	var code = require("fs").readFileSync(path, 'utf-8');
	eval(code);
}
