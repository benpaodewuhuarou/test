import React, { Component } from 'react';
import './Signin.css';
import {connect}from'react-redux';
import {bindActionCreators}from 'redux';
import {signclose}from '../../actions';
import axios from 'axios';
class Signin extends Component {
  handleSumbit(e){
    console.log('here');
    // e.preventDefault();
    // const url = '/login';
    // const formData = new FormData(e.target);
    
    // axios.post(url, formData).then((bb) =>{
    //     console.log(bb);
    // });
}


  render() {
    return (
      <div className='signin-container'>
        <div className='signin-close' onClick={this.props.signClose}>
          <i className="material-icons md-32">close</i>
        </div>
        <div className='signin-back'>
        </div>
        <div className='signin-form'>
          <form class="form-signin" onSubmit={this.handleSubmit}>
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
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    signClose:signclose
  }, dispatch);
}
export default connect(null,mapDispatchToProps)(Signin);          