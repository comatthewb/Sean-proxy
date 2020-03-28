var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "../Proxy")));

app.listen(3033, () => {
  console.log("App is listening on port 3033");
});
