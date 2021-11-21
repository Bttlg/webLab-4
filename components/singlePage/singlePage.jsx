import React from "react";
import ReactDOM from "react-dom";
import "./singlePage.css";

// import "../../styles/main.css";
import Example from "../example/Example";
import States from "../states/States";
import Header from "../header/Header";

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tolow: true,
    };
  }

  render() {
    return (
      <div className="fullContainer">
        <div className="buttonContainer">
          <button
            className="button"
            onClick={() =>
              this.setState(
                { tolow: false },
                document.querySelector(".button").classList.add("red"),
                document.querySelector(".button1").classList.remove("red")
              )
            }
          >
            States
          </button>
          <button
            className="button1"
            onClick={() =>
              this.setState(
                { tolow: true },
                document.querySelector(".button1").classList.add("red"),
                document.querySelector(".button").classList.remove("red")
              )
            }
          >
            Example
          </button>
        </div>
        <div>{this.state.tolow ? <Example /> : <States />}</div>
      </div>
    );
  }
}

export default SinglePage;
