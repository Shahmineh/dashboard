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

  getWeather = async () => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={43220924e64d6cf1d98c74292f380dbd}');
    const response = await api_call.json();

    console.log(response);
  }

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
          
        </Row>
        <Row>
          <Col>
            <div className="weather">
              <Titles />
              <Form loadWeather={this.getWeather} />
              <Weather />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Main, Form);


