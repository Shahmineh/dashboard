import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './HelloWidget.scss';

class HelloWidget extends Component {
  render() {
    return(
      <div>
        Hello widget
      </div>
    );

  }
}

export default withRouter(HelloWidget);