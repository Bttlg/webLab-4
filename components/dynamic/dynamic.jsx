import React from "react";
import ReactDOM from "react-dom";
import "./dynamic.css";

// import "../../styles/main.css";
import Example from "../example/Example";
import States from "../states/States";
import Header from "../header/Header";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tolow: true,
      buttonValue: "states",
    };
  }
  switch = () => {
    if (this.state.tolow) {
      this.setState({ tolow: false, buttonValue: "example" });
    } else {
      this.setState({ tolow: true, buttonValue: "status" });
    }
  };

  render() {
    return (
      <div className="fullContainer">
        <div className="buttonContainer">
          <button className="button" onClick={this.switch}>
            {this.state.buttonValue}
          </button>
        </div>
        <div>{this.state.tolow ? <Example /> : <States />}</div>
      </div>
    );
  }
}

export default Start;
