import React from "react";
import "./Hello.js";
class Hello extends React.Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello BOY</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}
export default Hello;
