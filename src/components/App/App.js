import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './App.css';
import MainNav from '../MainNav/MainNav';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav /> 
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
