import React from "react";

export class Display extends React.Component {
  render() {
    return (
      <div className="centered-fully">
        <p className="center-text-in-div bigger-font">
          {this.props.lastKeyPressed}
        </p>
      </div>
    );
  }
}
