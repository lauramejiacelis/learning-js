const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    `
    <html>
    <body>
    <h1>Hello</h1>
    </body>
    </html>
    `
  );
});

server.listen(3000, () => {
  console.log(`Server running at port 3000`);
});
