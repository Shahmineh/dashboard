import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';

import './HelloWidget.scss';

class HelloWidget extends Component {
  render() {
    return(
      <Fragment>
        <div className="hello">Hello</div>
        
        {/* <div className="header">
          <h2>{this.props.heading}</h2>
        </div>
        <div className="content">
          {this.props.children}
        </div> */}
      </Fragment>
    );

  }
}

export default withRouter(HelloWidget);