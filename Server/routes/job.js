const express = require("express");
const jobRouter = express.Router();
const Job = require("../Schema/newJob");
jobRouter.post("/", (req, res) => {
  const { worker, jobName, instructions, location } = req.body;
  console.log("job router success ", req.body);
  Job.findOne({ jobName }).then(job => {
    if (!job) {
      const newJob = new Job({ worker, jobName, instructions, location });
      newJob
        .save()
        .then(success => {
          console.log("successs saved job", success);
          res.send(success);
        })
        .catch(err => {
          console.log("WE GOT AN ERR HUSTON", err);

          res.sendStatus(500);
        });
    }
  });
});
jobRouter.get("/", (req, res) => {
  Job.find()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log("err finding jobs", err);
    });
});
module.exports = jobRouter;
