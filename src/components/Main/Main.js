import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

// Widgets
import Google from'../Widgets/Google/Google';
import Youtube from '../Widgets/Youtube/Youtube';

import Titles from '../Widgets/Weather/Titles';
import Form from '../Widgets/Weather/Form';
import Weather from '../Widgets/Weather/Weather';


import './Main.scss';

class Main extends Component {
  render() {
    return(
      <Container className="container">
        <Row style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Google />
          </Col>
          <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Youtube />
          </Col>
          <Col>
            <div>
              <Titles />
              <Form />
              <Weather />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Main);

