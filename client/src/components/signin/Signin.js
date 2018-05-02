import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {
  render() {
    return (
      <div className='signin-container'>
      <div className='signin-close'>
                    <i className="material-icons md-32">close</i>
                </div>
        <div className='signin-back'>
        </div>
        <div className='signin-form'>
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal"> Sign in</h1>
            <div className='signin-input'>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
            </div>
            <div className='signin-input'>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
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
export default Signin;          