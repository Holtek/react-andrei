import React from "react";
import App from "./App";
import { robots } from "./robots";
class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: ""
    };
  }
  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    console.log(filteredRobots);
  };
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
