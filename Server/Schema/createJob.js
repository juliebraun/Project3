var mongoose = require("mongoose");

module.exports = mongoose.model("supervisor", {
  username: String,
  password: String,
  menuValue: Boolean
});
