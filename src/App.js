import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import uuid from "uuid";
import NavBar from "./Components/NavBar";
import Loginscreen from "./Components/Loginscreen";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <LoginScreen />
//         {/* <NavBar /> */}
//       </div>
//     );
//   }
// }

// export default App;
injectTapEventPlugin();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      isLoggedIn: false
      // uploadScreen: []
    };
  }

  handleLogin() {
    console.log("app level login success");
    this.setState({ isLoggedIn: true });
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(
      <Loginscreen
        parentContext={this}
        loginHandler={this.handleLogin.bind(this)}
      />
    );
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    if (true) {
      //this.state.isLoggedIn
      return (
        <div className="App">
          <NavBar />
        </div>
      );
    } else {
      return (
        <div className="App">
          {this.state.loginPage}
          {/* {this.state.uploadScreen} */}
        </div>
      );
    }
  }
}
const style = {
  margin: 15
};
export default App;

// if (response.data.code == 200) {
//   console.log("Login successfull");
//   var uploadScreen = [];
//   uploadScreen.push(<UploadScreen appContext={self.props.appContext} />);
//   self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
// }
