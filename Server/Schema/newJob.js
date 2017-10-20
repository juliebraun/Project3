var mongoose = require("mongoose");
var JobSchema = mongoose.Schema;
const Job = new JobSchema({
  jobName: String,
  location: String,
  instructions: String,
  worker: String
});
module.exports = mongoose.model("newJob", Job);
