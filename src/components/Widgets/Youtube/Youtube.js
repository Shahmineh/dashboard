import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'reactstrap';


import './Youtube.scss';

class Youtube extends Component {

  openYoutube() {
    window.open("https://www.youtube.com/");
  }
  render() {
    return(
      <Fragment>
        <div className="youtube text-center">
          <Row>
            <Col>
              <div className="icon">
                Youtube
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Press enter to search</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <form action="https://www.youtube.com" /* onSubmit={this.openGoogle} */ method="get">
              <input type="text" name="q" />
            </form>
            </Col>
          </Row>
        </div>
      </Fragment>
      
    );
  }
}

export default withRouter(Youtube);