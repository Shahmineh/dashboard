import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';

import './Clock.scss';

class Clock extends Component {
  render() {
    return(
      <Fragment>
        <div className="clock">
          Clock
        </div>
      </Fragment>
      
    );
  }
}

export default withRouter(Clock);