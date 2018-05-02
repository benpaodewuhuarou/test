import React, { Component } from 'react';
import Header from './components/mainpage/Header';
import Nav from './components/mainpage//Nav';
import Cat from './components/mainpage/Category';
import Slide from './components/mainpage/Slide';
import Rem from './components/mainpage/Recommend'
import './App.css';
import * as actions from './actions';
import Top from './components/mainpage/top';
import Footer from './components/mainpage/Footer';
import Sell from './components/sell/Sell';
import Login from './components/login/Login';
import Sigin from './components/signin/Signin';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }
  render() {
    return (
      <div className="App container-fluid">
        {/* <Top />
        <Header />
        <Nav />
        <Sell />
        <Login /> 
        <Slide />
        <Rem />
        <Cat />
        <Footer /> */}
        <Sigin />
        
      </div>
    );
  }
}

export default App;
