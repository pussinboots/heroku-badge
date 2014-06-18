var connect = require('connect');
var requestCl = require("request");
var serveStatic = require('serve-static');
var fs = require('fs');
var url = require('url');

var port = Number(process.env.PORT || 9000);
var server = connect()
server.use(serveStatic(__dirname+'/public'));
server.use(function (req, res, next) {
	var app = url.parse(req.url, true).query.app;
	requestCl.get({url:"https://"+app+".herokuapp.com/images/heroku-badge.png",  encoding: 'binary'}, function(error, response, body) {
		if(error || response.statusCode!=200) {
			var errorMessage = error || response.statusCode;
			console.log('server error image for ' + app + ' error ' + errorMessage);
			var fileStream = fs.createReadStream('public/images/heroku-failed.png');
			res.writeHead(200, {'Content-Type': 'image/png', "Cache-Control:" : "no-cache, no-store, must-revalidate" });
        		fileStream.pipe(res);
			
		} else {
			console.log('server success image for ' + app);
			res.writeHead(200, {'Content-Type': 'image/png', "Cache-Control:" : "no-cache, no-store, must-revalidate" });
			res.contentType = 'image/png';
	     		res.end(body, 'binary');
		}
	});
});

server.listen(port);
