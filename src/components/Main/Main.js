import React, { Component } from 'react';
import { withRouter } from 'react-router';

import HelloWidget from'../Widgets/HelloWidget/HelloWidget';

import './Main.scss';

class Main extends Component {
  render() {
    return(
      <div>
        <HelloWidget />
      </div>
    );
  }
}

export default withRouter(Main);