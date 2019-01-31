import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { withRouter } from 'react-router';

// Widgets
import Google from'../Widgets/Google/Google';
import Youtube from '../Widgets/Youtube/Youtube';

import './App.scss';
import MainNav from '../MainNav/MainNav';
import Main from '../Main/Main';


class App extends Component {
  render() {
    return (
      <div className="app" style={{ backgroundColor: '#41464c' }}>
        <MainNav /> 
        <Container className="container">
          <Row style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
              <Google />
            </Col>
            <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
              <Youtube />
            </Col>
          </Row>
          <Row>
            <Col>
              <Main />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
