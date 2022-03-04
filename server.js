const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hello, Galvanize!");
  });
const HOST = 3000;
const PORT = "127.0.0.1";
  server.listen(HOST, PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
  });