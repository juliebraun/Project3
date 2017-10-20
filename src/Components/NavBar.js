import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddProject from "./AddProject";
import ProjectItem from "./ProjectItem";
import Projects from "./Projects";
import { Nav, NavItem, Col, Row } from "react-bootstrap";
import LoginScreen from "./Loginscreen";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

class SidebarExample extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: []
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    const routes = [
      {
        path: "/home",
        exact: true,
        // sidebar: () => <div>Existing Projects</div>,
        main: () => (
          <Projects
            projects={this.state.projects}
            onDelete={this.handleDeleteProject.bind(this)}
          />
        )
      },
      {
        path: "/createproject",
        // sidebar: () => <div>Create Project</div>,
        main: () => <AddProject addProject={this.handleAddProject.bind(this)} />
      },
      {
        path: "/deletedprojects",
        // sidebar: () => <div>Deleted Projects</div>,
        main: () => <Projects onDelete={this.handleDeleteProject.bind(this)} />
      },
      {
        // path: "/workers",
        // sidebar: () => <div>Add/Delete Workers</div>,
        // main: () => (
        //   <Workers
        //     addWorker={this.handleAddWorker.bind(this)}
        //     deleteWorker={this.handleDeleteWorker.bind(this)}
        //   />
        // )
      }
    ];
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div>
            <Row bsClass="row">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Nav bsStyle="tabs">
                  <NavLink to="/home">View Current Jobs</NavLink>
                  <NavLink to="/createproject">Create New Jobs</NavLink>
                  <NavLink to="/deletedprojects">View Deleted Jobs</NavLink>
                  <NavLink to="/workers">Workers</NavLink>
                </Nav>
              </Col>
            </Row>
          </div>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
export default SidebarExample;
