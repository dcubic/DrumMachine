import React from "react";
import { Button } from "react-bootstrap";

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyName: props.keyName
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onKeyPress(this.state.keyName);
  }

  render() {
    return (
      <div className="text-center">
        <Button
          style={{
            backgroundColor: "#e9cba4",
            borderColor: "#854442",
            color: "#3c2f2f",
            borderRadius: "5px"
          }}
          className="mx-0 my-1"
          onClick={this.handleClick}
          size="lg"
        >
          {this.state.keyName}
        </Button>
      </div>
    );
  }
}
