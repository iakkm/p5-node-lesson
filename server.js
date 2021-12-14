console.log("up and running");

let express = require("express");

let app = express();

let port = 5500;

let server = app.listen(port);

console.log("server is running on http://localhost:" + port);

app.use(express.static("public"));
