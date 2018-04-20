import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Rec from './components/Recommend';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Nav />
        <Rec />
      </div>
    );
  }
}

export default App;
