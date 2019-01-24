import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./firstComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      firstNames: [],
      lastNames: []
    };
  }

  // toggle = () => {
  //   this.setState({ isOn: !this.state.isOn });
  // };

  inputUpdate1 = event => {
    this.setState({ firstName: event.target.value });
  };

  inputUpdate2 = event => {
    this.setState({ lastName: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.setState({
      firstNames: [...this.state.firstNames, this.state.firstName],
      lastNames: [...this.state.lastNames, this.state.lastName],
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.formSubmit}>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.inputUpdate1}
            />
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.inputUpdate2}
            />
            <button>Submit</button>
          </form>
          <FirstComponent items={this.state.firstNames} />
          <FirstComponent items={this.state.lastNames} />
        </header>
      </div>
    );
  }
}

export default App;
