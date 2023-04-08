const http = require("http");

const serverLau = http.createServer();
const port = 8000;
const fs = require("fs").promises;

const requestListener = (req, res) => {
  fs.readFile("./homeworkL.html").then((contents) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(contents);
  });
};

serverLau.on("request", requestListener);

// serverLau.on("request", (req, res) => {
//   console.log(req.method);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(
//     `
//     <html>
//     <body style='background-color: black'>
//     <div style='display:flex; flex-direction: column; justify-content: center;; align-items=center'>
//     <h2 style='align-self: center; color: white; '>Hello World</h2>
//     <img alt='planet' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_%28transparent%29.png' width="300" style='align-self: center;'/>
//     </div>
//     </body>
//     </html>
//     `
//   );
// });

serverLau.listen(port, () => {
  console.log(`Server running at port ${port} `);
});
