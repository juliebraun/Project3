require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

let app = express();

var options = {
  usemongoClient: true,
  promiseLibrary: require("bluebird")
};

var db = mongoose.createConnection(process.env.MONGO_DB_URI, options);

db.on("open", function() {
  console.log("Connected to Mongo!");
});

app.use(express.static("public"));

app.get("*", function(req, res) {
  res.json({ Hello: "World" });
});
app.listen(3001, function() {
  console.log("listening on second PORT 3001");
});
