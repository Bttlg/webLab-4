import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import { BsFacebook } from "react-icons/bs";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container1">
        <div className="row1">
          <p className="myName">My name is Лувсандагва</p>
          <p className="myName">Програм хангамж</p>
        </div>
        <div className="row2">
          <img
            className="image"
            src="./components/header/download1.jpg"
            height="auto"
            width="60%"
          />
        </div>
      </div>
    );
  }
}

export default Header;
