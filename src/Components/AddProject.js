import React, { Component } from "react";

class AddProject extends Component {
  static defaultProps = {
    categories: [
      "Bubba Boy",
      "Jamie Fox",
      "Santa",
      "John Helms",
      "Sallie Jones",
      "Clint Eastwood"
    ]
  };

  //   static defaultProps = {
  //     priorities: [
  //       "Morning 8AM-11AM",
  //       "Afternoon 11AM-2PM",
  //       "Late Afternoon 2PM-6PM"
  //     ]
  //   };

  handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(worker => {
      return (
        <option key={worker} value="worker">
          {worker}
        </option>
      );
    });

    // let priorityOptions = this.props.priorities.map(priority => {
    //   return (
    //     <option key={priority} value="priority">
    //       {priority}
    //     </option>
    //   );
    // });
    return (
      <div>
        <h3>Create New Job</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Job Name</label>
            <br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Location</label>
            <br />
            <input type="text" ref="location" />
          </div>
          <div>
            <label>Priority</label>
            <br />
            {/* <select ref="priority">{priorityOptions}</select> */}
            <input type="text" ref="location" />
          </div>
          <div>
            <label>Instructions</label>
            <br />
            <input type="text" ref="instructions" />
          </div>
          <div>
            <label>Assign Worker</label>
            <br />
            <select ref="worker">{categoryOptions}</select>
          </div>
          <br />
          <br />
          <input type="submit" value="Assign" />
        </form>
      </div>
    );
  }
}
export default AddProject;
