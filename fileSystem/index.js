// file system module
const fs = require("fs");

// readfile with filesystem readFileSync Method
exports.readFile = (req, res, path = null) => {
  try {
    const data = fs.readFileSync(path || "./fileSystem/index.html", "utf8");
    // sending response to the server
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
  } catch (error) {
    console.log(error);
    res.writeHead(500);
  }
};

// file updateing with filesystem appendFileSync method
exports.appendFile = (req, res, data = "") => {
  try {
    fs.appendFileSync("./fileSystem/file.txt", data);
    // sending response to the server
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("file appended");
  } catch (error) {
    console.log(error);
    res.writeHead(500);
  }
};

// open file using file system openSync method
exports.open = (req, res) => {
  try {
    const data = fs.openSync("./fileSystem/file.txt", "w");
    // sending response to the server
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("file opend");

    return data;
  } catch (error) {
    console.log(error);
    res.writeHead(500);
  }
};

// writing a file with file system writeFileSync method
exports.writeFile = (req, res, data = "") => {
  try {
    fs.writeFileSync("./fileSystem/file.txt", data);
    // sending response to the server
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("file writed");
  } catch (error) {
    console.log(error);
    res.writeHead(500);
  }
};
