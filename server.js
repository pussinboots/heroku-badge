var connect = require('connect');
var requestCl = require("request");
var serveStatic = require('serve-static');
var fs = require('fs');
var url = require('url');
var port = Number(process.env.PORT || 9000);
var server = connect()

server.use(serveStatic(__dirname + '/public'));
server.use(function(req, res, next) {
  var app = url.parse(req.url, true).query.app;
  var root = url.parse(req.url, true).query.root || '';
  var style = url.parse(req.url, true).query.style || '';
  if (style.length > 0) style = '-' +style;
  requestCl.get({
    url: "https://" + app + ".herokuapp.com/" + root
  }, function(error, response, body) {
    if (error || [200,401].indexOf(response.statusCode) < 0) {
      var errorMessage = error || response.statusCode;
      console.log('server error image for ' + app + ' error ' + errorMessage);
      var fileStream = fs.createReadStream('public/images/heroku-failed' + style + '.png');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        "Cache-Control:": "no-cache, no-store, must-revalidate"
      });
      fileStream.pipe(res);
    } else {
      console.log('server success image for ' + app);
      var fileStream = fs.createReadStream('public/images/heroku-badge' + style + '.png');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        "Cache-Control:": "no-cache, no-store, must-revalidate"
      });
      fileStream.pipe(res);
    }
  });
});

server.listen(port);
