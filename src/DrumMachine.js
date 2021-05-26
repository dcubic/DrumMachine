import React from "react";
import { DrumKit } from "./DrumKit.js";
import { Display } from "./Display.js";
import { Container, Row, Col } from "react-bootstrap";
import { convertCodeToKey, validKeyCodes } from "./CodeToKeyConverter.js";
import { playAudioClip } from "./AudioPlayer.js";

export class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastKeyPressed: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyboardInteraction = this.handleKeyboardInteraction.bind(this);
  }

  handleKeyPress(keyPressed) {
    this.setState({
      lastKeyPressed: keyPressed
    });
    playAudioClip(keyPressed);
  }

  handleKeyboardInteraction(event) {
    const keyCode = event.keyCode;
    if (validKeyCodes.includes(keyCode)) {
      let keyCurrent = convertCodeToKey(keyCode);
      this.handleKeyPress(keyCurrent);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyboardInteraction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyboardInteraction);
  }

  render() {
    const lastKeyPressed = this.state.lastKeyPressed;
    return (
      <Container className="display-background-color">
        <Row xs={2} sm={2} md={2} lg={2}>
          <Col xs={10} sm={10} md={10} lg={10}>
            <DrumKit
              lastKeyPressed={lastKeyPressed}
              onKeyPress={this.handleKeyPress}
            />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Display lastKeyPressed={lastKeyPressed} />
          </Col>
        </Row>
      </Container>
    );
  }
}
