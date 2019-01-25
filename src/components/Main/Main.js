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
        <Row style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
            <HelloWidget />
          </Col>
          <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Clock />
          </Col>

        </Row>
      </Container>
    );
  }
}

export default withRouter(Main);