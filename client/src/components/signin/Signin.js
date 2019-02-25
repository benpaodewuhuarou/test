import React, { Component } from 'react';
import './Signin.css';
import {connect}from'react-redux';
import {bindActionCreators}from 'redux';
import {signclose,loginerrormessage}from '../../actions';
import axios from 'axios';
import { Link,Redirect} from 'react-router-dom';


class Signin extends Component {
    handleSumbit=async(e)=>{
    e.preventDefault();
    const url = '/auth/login';
    const formData = new FormData(e.target);
    let username = formData.get('username');
    let password = formData.get('password');

    let data ={
      username:username,
      password:password
    }
   
    let user = await axios.post('/auth/login',data);
    if(user){
      this.props.history.push('/home');
    }else{
      this.props.loginerrormessage();
    }
}
   handleClick=(e)=>{
    console.log('link has been click');
   }

  render() {
    return (
      <div className='signin-container'>
        <Link to={'/home'} >
        <div className='signin-close' onClick={this.handleClick}>
          <i className="material-icons md-32">close</i>
        </div>
        </Link>
        <div className='signin-back'>
        </div>
        <div className='signin-form'>
          <form class="form-signin" onSubmit={this.handleSumbit}>
            <h1 class="h3 mb-3 font-weight-normal"> Sign in</h1>
            <div className='signin-input'>
              <label for="userName" class="sr-only">Username</label>
              <input type="text" name='username' class="form-control" placeholder="userName" required="true" autofocus="true" />
            </div>
            <div className='signin-input'>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" name='password' class="form-control" placeholder="Password" required="" />
            </div>
            <div class="checkbox mb-3 signin-input">
              <input className='form-check-input' type='checkbox' value='' id='remenber' />
              <label class='form-check-label' for='remenber'>
                remenber me
                  </label>
            </div>
            <div className='sigin-error-message'>
                {this.props.message}
            </div>
            <div className='signin-input'>
              <button class="btn  btn-primary " type="submit">Sign in</button>
            </div>
            <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
          </form>
        </div>


      </div>
    )
  }
}
function mapStateToprops(state) {
  return { 
          message:state.errormessage
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loginerrormessage:loginerrormessage
  }, dispatch);
}
export default connect(null,mapDispatchToProps)(Signin);          