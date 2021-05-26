import React from "react";
import { DrumPad } from "./DrumPad.js";
import { Container, Row, Col } from "react-bootstrap";

export class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(keyPressed) {
    this.props.onKeyPress(keyPressed);
  }

  render() {
    return (
      <div className="background-color">
        <Container>
          <Row xs={3} md={3} lg={3}>
            <Col>
              <DrumPad keyName="Q" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="W" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="E" onKeyPress={this.handleKeyPress} />
            </Col>
          </Row>
          <Row xs={3} md={3} lg={3}>
            <Col>
              <DrumPad keyName="A" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="S" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="D" onKeyPress={this.handleKeyPress} />
            </Col>
          </Row>
          <Row xs={3} md={3} lg={3}>
            <Col>
              <DrumPad keyName="Z" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="X" onKeyPress={this.handleKeyPress} />
            </Col>
            <Col>
              <DrumPad keyName="C" onKeyPress={this.handleKeyPress} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
