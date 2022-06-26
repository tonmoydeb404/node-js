/*
#	Title : First Node JS Server
#	Description : creating a basic node js server with simple routing system using url module
#	Author : Tonmoy Deb (tonmoydeb404@gmail.com)
#	Date : 26/06/2022
*/

// importing http module
const http = require("http");
// importing url module
const url = require("url");
const { readFile, appendFile, open, writeFile } = require("./fileSystem");

const PORT = 8080;

const server = http.createServer((req, res) => {
  // parse url using node js url module
  const slug = url.parse(req.url, true);
  // get the current path
  const currentPath = slug.pathname;

  // handle routes using switch statement
  switch (currentPath) {
    case "/": {
      res.write("this is home page");
      break;
    }

    case "/fs/readfile": {
      readFile(req, res);
      break;
    }

    case "/fs/appendfile": {
      appendFile(req, res, "append file");
      break;
    }

    case "/fs/writefile": {
      writeFile(req, res, "write file");
      break;
    }

    case "/fs/open": {
      open(req, res);
      break;
    }

    default:
      res.writeHead(404);
      break;
  }

  res.end();
});

// listen to the server
server
  .listen(PORT)
  .addListener("listening", () =>
    console.log(`server is listening at http://localhost:${PORT}`)
  );
