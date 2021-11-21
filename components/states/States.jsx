import React from "react";
import "./States.css";

import Header from "../header/Header";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    // console.log(
    //   "window.cs142models.statesModel()",
    //   window.cs142models.statesModel()
    // );
    this.state = {
      states: window.cs142models.statesModel(),
      searchStates: "",
    };
  }

  searchText = (event) => {
    this.setState({
      searchStates: event.target.value.toLowerCase(),
    });
  };

  render() {
    const searchedStates = this.state.states.filter((el) =>
      el.toLowerCase().includes(this.state.searchStates)
    );

    return (
      <div className="cont">
        <Header />
        <div className="searchStates">
          State-ээ оруулна уу:
          <input
            className="input"
            type="search"
            name="name"
            placeholder="State-ээ бичнэ үү"
            onChange={this.searchText}
          />
        </div>
        <div>{this.state.state}</div>
        <div className="statesContainer">
          {searchedStates.length === 0 ? (
            <div className="errorText">
              <p className="errorTexta">Хайлтын үр дүн олдсонгүй.</p>
            </div>
          ) : (
            searchedStates.map((el, index) => (
              <div className="states" key={index}>
                {el}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default States;
