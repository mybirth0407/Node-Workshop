var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream
  // 1
  // fs.readFile(__dirname + "/data.txt", function (err, data) {
  //   res.end(data);
  // });

  // 2
  var stream = fs.createReadStream(__dirname + "/data.txt");
  stream.pipe(res);
});

server.listen(8000);
