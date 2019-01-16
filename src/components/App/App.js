import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './App.css';
import MainNav from '../MainNav/MainNav';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav /> 
      </div>
    );
  }
}

export default withRouter(App);
