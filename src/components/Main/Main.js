import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

// Widgets
import HelloWidget from'../Widgets/HelloWidget/HelloWidget';
import Clock from '../Widgets/Clock/Clock';

import './Main.scss';

class Main extends Component {
  render() {
    return(
      <Container className="container">
        <Row>
          <Col>
            <HelloWidget />
          </Col>
          <Col>
            <Clock />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Main);