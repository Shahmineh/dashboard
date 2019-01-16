import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './MainNav.css';


class MainNav extends Component {
  render() {
    return(
      <div>
        My dashboard
      </div>
    );
  }
}

export default withRouter(MainNav);