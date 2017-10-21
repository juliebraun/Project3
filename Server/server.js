//this goes back in .env file
//MONGO_DB_URI=mongodb://heroku_hf3rlp6v:aoddqd5vddtgvfglprlkof1vi5@ds121495.mlab.com:21495/heroku_hf3rlp6v

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var passport = require("passport");
var expressSession = require("express-session");
var jobRouter = require("./routes/job");
let app = express();
mongoose.Promise = require("bluebird");
var options = {
  usemongoClient: true,
  promiseLibrary: require("bluebird")
};

var db = mongoose.connect(process.env.MONGO_DB_URI, options);

app.use(function(req, res, next) {
  console.log(req.path);
  next();
});

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());

// passport
require("./config/passport.js")(app, passport);
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: true,
    saveUninitialized: true
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

// require("./routes/passportroutes.js")(app, passport);

app.use(express.static("public"));
app.use("/api/job", jobRouter);
app.get("*", function(req, res) {
  res.json({ Hello: "World" });
});
app.listen(3001, function() {
  console.log("listening on second PORT 3001");
});
