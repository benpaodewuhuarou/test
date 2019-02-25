import React, { Component } from 'react';
import Header from './components/mainpage/Header';
import Nav from './components/mainpage//Nav';
import Cat from './components/mainpage/Category';
import Slide from './components/mainpage/Slide';
import Rem from './components/mainpage/Recommend'
import './App.css';
import {fetchUser, fetchIndexProduct} from './actions';
import { bindActionCreators } from 'redux';
import Top from './components/mainpage/top';
import Footer from './components/mainpage/Footer';
import Sell from './components/sell/Sell';
import Login from './components/login/Login';
import Product from './components/product/Product';
import Ad from './components/adManagement/AdManagement';
import Us from './components/userManagement/UserManagement';
import {BrowserRouter,Route}from 'react-router-dom';
import { connect } from 'react-redux';
import { LOG_IN } from './actions/types';
import Signin from './components/signin/Signin';
import index from './reducers/index';
import { Link } from 'react-router-dom';
import ProductType from './components/productShow/productShow';
import ProductSearch from './components/productSearch/productSearch';
class App extends Component {



  componentDidMount(){
    this.props.fetchUser();
    this.props.fetchIndexProduct();
  }
  
  render() {
    return (
      <div className="App container-fluid">
          <BrowserRouter >
            <div >
              <Header />
              {/* <Product /> */}
              <Route exact path='/home' component={Nav} />
              <Route exact path='/home' component={Slide}/>
              <Route exact path='/home' component={Rem}/>
              {/* <Route exact path='/home' component={Cat}/> */}
              <Route exact path='/individual' component={Product}/>
              <Route exact path='/sign' component={Signin}/>
              <Route exact path='/login' component={Login}/> 
              <Route exact path='/sell' component={Sell}/>
              <Route exact path='/productSearch' component={ProductSearch}/>
              <Route exact path='/productType' component={ProductType}/>
            </div>
          </BrowserRouter>

        {/* <Nav />
        <Slide />
        <Rem />
        <Cat />
        <Footer />
        <Us />
        <Ad />
        <Sell />  */}
       
      </div>
    )} 
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      fetchUser:fetchUser,
      fetchIndexProduct:fetchIndexProduct,
    }, dispatch);
    
  }
function mapStateToprops(state) {
  return { auth:state.auth,
           log:state.log,
           product:state.product
  };
}


export default connect(mapStateToprops,mapDispatchToProps)(App);
