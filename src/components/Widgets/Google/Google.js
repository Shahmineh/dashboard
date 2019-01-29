import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'reactstrap';


import './Google.scss';

class Google extends Component {

  openGoogle() {
    window.open("https://google.com/search");
  }
  render() {
    return(
      <Fragment>
        <div className="google text-center">
          <Row>
            <Col>
              <div className="icon">
                G
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
            <form action="https://google.com/search" /* onSubmit={this.openGoogle} */ method="get">
              <input type="text" name="q" />
            </form>
            </Col>
          </Row>
        </div>
      </Fragment>
    );

  }
}

export default withRouter(Google);