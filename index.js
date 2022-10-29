const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // ROUTES
  switch (req.url) {
    // home route
    case "/home":
      res.writeHead(302, {
        Location: "/",
      });
      res.end();
      break;

    case "/":
      fs.readFile(
        path.join(__dirname, "public/home.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(data);
        }
      );
      break;

    // about me route
    case "/about":
      fs.readFile(
        path.join(__dirname, "public/about.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(data);
        }
      );
      break;

    default:
    // contact me route
    case "/contact":
      fs.readFile(
        path.join(__dirname, "public/contact.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;

          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(data);
        }
      );
      break;
  }
});

// listen to request at localhost:3000
server.listen(3000, () => {
  console.log(`Server started on localhost: port ${PORT}`);
});
