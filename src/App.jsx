/** @format */
import './App.css';

import React, { Component } from 'react';

import Launches from './components/launches';
import Navigation from './components/nav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Launches/>
      </React.Fragment>
    )
  }
}

export default App
