import React, { Component } from 'react';
import Header from './components/mainpage/Header';
import Nav from './components/mainpage//Nav';
import Cat from './components/mainpage/Category';
import Slide from './components/mainpage/Slide';
import Rem from './components/mainpage/Recommend'
import './App.css';
import axios from 'axios';
import {fetchUser, login} from './actions';
import { bindActionCreators } from 'redux';
import Top from './components/mainpage/top';
import Footer from './components/mainpage/Footer';
import Sell from './components/sell/Sell';
import Login from './components/login/Login';
import Sigin from './components/signin/Signin';
import Product from './components/product/Product';
import Ad from './components/adManagement/AdManagement';
import Us from './components/userManagement/UserManagement';
import {BrowserRouter,Route}from 'react-router-dom';
import { connect } from 'react-redux';
import { LOG_IN } from './actions/types';
import Signin from './components/signin/Signin';
import index from './reducers/index';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
    
    }
    
  render() {
    return (
      <div className="App container-fluid">
          <BrowserRouter >
            <div >
             
              {/* <Signin className='ddd'style={{zIndex:'999'}}/> */}
              <Header />
              {this.props.log=='sign'?<Sigin />:null}
              {this.props.log=='log'?<Login/>:null}
              <Route exact path='/sell' component={Sell}/>
            </div>
          </BrowserRouter>
        {/* <Top />
        <Header /> */}
        {/* <Nav />
        <Slide />
        <Rem />
        <Cat />
        <Footer />
        <Product />
        <Us />
        <Ad />
        <Sell />  */}
       
      </div>
    )} 
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      fetchUser:fetchUser
    }, dispatch);
    
  }
function mapStateToprops(state) {
  return { auth:state.auth,
           log:state.log
  };
}


export default connect(mapStateToprops,mapDispatchToProps)(App);
