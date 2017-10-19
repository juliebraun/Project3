var mongoose = require("mongoose");

module.exports = mongoose.model("workers", {
  name: String,
  email: String,
  superID: Number
});
