import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './App.scss';
import MainNav from '../MainNav/MainNav';
import Main from '../Main/Main';


class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#41464c' }}>
        <MainNav /> 
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
