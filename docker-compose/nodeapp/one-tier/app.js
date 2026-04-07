const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from Node");
}).listen(3000, "0.0.0.0");
