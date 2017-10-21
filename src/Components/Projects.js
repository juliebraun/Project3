import React, { Component } from "react";
// import nodemailer from "nodemailer";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    fetch("/api/job")
      .then(data => data.json())
      .then(jobs => {
        console.log("we got jobssss", jobs);
        this.setState({ jobs });
      })
      .catch(err => {
        console.log("errrrr", err);
      });
  }
  //id times 3 where jobname should be
  deleteProject(jobName) {
    // this.props.onDelete(jobName);
    console.log(jobName);

    var newJobs = [];
    this.state.jobs.forEach(function(item) {
      if (item.jobName != jobName) {
        newJobs.push(item);
      }
    });
    console.log(this.state.jobs);
    console.log(newJobs);
    this.setState({ jobs: newJobs });
  }

  // //new nodemailer code
  // handleDispatch() {
  //   nodemailer.createTestAccount((err, account) => {
  //     // create reusable transporter object using the default SMTP transport
  //     let transporter = nodemailer.createTransport({
  //       service: "gmail",
  //       port: 587,
  //       secure: false, // true for 465, false for other ports
  //       auth: {
  //         user: "juliebraun07113@gmail.com", // generated ethereal user
  //         pass: "todd5588" // generated ethereal password
  //       },
  //       tls: {
  //         rejectUnauthorized: false
  //       }
  //     });

  //     // setup email data with unicode symbols
  //     let mailOptions = {
  //       from: '"Supervisor Julie 👻" <julie@gmail.com>', // sender address
  //       to: "juliebraun07113@gmail.com", // list of receivers
  //       subject: "Hello ✔", // Subject line
  //       text: "Hello world?", // plain text body
  //       html: "<b>Hello world?</b>" // html body
  //     };

  //     // send mail with defined transport object
  //     transporter.sendMail(mailOptions, (error, info) => {
  //       if (error) {
  //         return console.log(error);
  //       }
  //       console.log("Message sent: %s", info.messageId);
  //       // Preview only available when sending through an Ethereal account
  //       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  //       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
  //       // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  //     });
  //   });
  // }

  render() {
    let projectItems;
    if (this.state.jobs.length > 0) {
      projectItems = this.state.jobs.map(project => {
        // console.log(project);
        return (
          <div>
            <ProjectItem
              onDelete={this.deleteProject.bind(this)}
              key={project.name}
              project={project}
            />
            <input
              className="dispatchButton"
              type="submit"
              value="Dispatch!"
              /* onSubmit={this.handleDispatch} */
            />
          </div>
        );
      });
    }

    return <div className="Projects">{projectItems}</div>;
  }
}

export default Projects;
