import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
// import UploadScreen from "./UploadScreen";
// import UploadPage from "./UploadPage";
var apiBaseUrl = "http://localhost:3001";
class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Enter your User ID"
            floatingLabelText="Supervisor Id"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    );
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent,
      loginRole: "supervisor"
    };
  }
  componentWillMount() {
    // console.log("willmount prop values",this.props);
    if (this.props.role != undefined) {
      if (this.props.role == "supervisor") {
        console.log("in supervisor componentWillMount");
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your User ID"
                floatingLabelText="Supervisor ID"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 1,
          loginComponent: localloginComponent,
          loginRole: "supervisor"
        });
      } else if (this.props.role == "worker") {
        console.log("in worker componentWillMount");
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Worker ID"
                floatingLabelText="Worker ID"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 2,
          loginComponent: localloginComponent,
          loginRole: "worker"
        });
      }
    }
  }
  handleClick(event) {
    var self = this;
    var payload = {
      username: this.state.username,
      password: this.state.password,
      type: this.state.loginRole
    };
    axios
      .post(apiBaseUrl + "/login", payload)
      .then(function(response) {
        console.log(response);
        if (response.status == 200) {
          console.log("Login successfull");
          //   var uploadScreen = [];
          //   uploadScreen.push(
          //     <UploadPage
          //       appContext={self.props.appContext}
          //       role={self.state.loginRole}
          //     />
          //   );
          //   self.props.appContext.setState({
          //     loginPage: [],
          //     uploadScreen: uploadScreen
          //   });
        } else if (response.status == 204) {
          console.log("Username password do not match");
          alert(response.data.success);
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleMenuChange(value) {
    console.log("menuvalue", value);
    var loginRole;
    if (value == 1) {
      var localloginComponent = [];
      loginRole = "supervisor";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Supervisor ID"
              floatingLabelText="Supervisor ID"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    } else if (value == 2) {
      var localloginComponent = [];
      loginRole = "worker";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Worker ID"
              floatingLabelText="Worker ID"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    }
    this.setState({
      menuValue: value,
      loginComponent: localloginComponent,
      loginRole: loginRole
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Login" />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <p>Login as:</p>
            <DropDownMenu
              value={this.state.menuValue}
              onChange={(event, index, value) => this.handleMenuChange(value)}
            >
              <MenuItem value={1} primaryText="Supervisor" />
              <MenuItem value={2} primaryText="Worker" />
            </DropDownMenu>
          </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
