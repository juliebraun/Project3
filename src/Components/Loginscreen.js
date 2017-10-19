import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import Login from "./Login";
import Register from "./Register";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red900 } from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
  fontFamily: "Abril Fatface",

  palette: {
    primary1Color: red900
  },
  appBar: {
    height: 100
  }
});

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    console.log("loginscreen props");
    console.log(props);
    var loginButtons = [];
    loginButtons.push(
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <RaisedButton
              label={"Register as Supervisor"}
              primary={true}
              style={style}
              onClick={event => this.handleClick(event, "supervisor")}
            />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <RaisedButton
              label={"Register as Worker"}
              primary={true}
              style={style}
              onClick={event => this.handleClick(event, "worker")}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
      loginButtons: loginButtons,
      studentbuttonLabel: "Register as Supervisor",
      teacherbuttonLabel: "Register as Worker",
      isLogin: true
    };
  }
  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login
        parentContext={this}
        appContext={this.props.appContext}
        handleLogin={this.props.loginHandler}
      />
    );
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }
  handleClick(event, userRole) {
    console.log("event", userRole);
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(
        <Register
          parentContext={this}
          appContext={this.props.appContext}
          role={userRole}
        />
      );
      loginmessage = "Already registered. Go to Login";
      var loginButtons = [];
      loginButtons.push(
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <RaisedButton
                label={"Login"}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event, userRole)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      );
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        loginButtons: loginButtons,
        isLogin: false
      });
    } else {
      var loginscreen = [],
        loginButtons = [];
      loginButtons.push(
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <RaisedButton
                label={"Register as Supervisor"}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event, "supervisor")}
              />
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <RaisedButton
                label={"Register as Worker"}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event, "worker")}
              />
            </div>
          </MuiThemeProvider>
        </div>
      );
      loginscreen.push(
        <Login
          parentContext={this}
          appContext={this.props.appContext}
          role={userRole}
          handleLogin={this.props.loginHandler}
        />
      );
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        loginButtons: loginButtons,
        isLogin: true
      });
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Loginscreen;
