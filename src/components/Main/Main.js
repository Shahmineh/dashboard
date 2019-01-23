import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './Main.scss';
import GoogleSearch from '../GoogleSearch/GoogleSearch';

class Main extends Component {
  render() {
    return(
      <div>
        <GoogleSearch />
      </div>
    );
  }
}

export default withRouter(Main);

