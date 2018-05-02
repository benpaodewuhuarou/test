import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (

            <div className='loginContainer'>

                <div className='loginBack'>
                </div>
                <div className='login'>

                    <h1 className='logHead'>LOGIN</h1>

                    <form className='fo'>
                        <div class="form-group">
                            <label for='userName'> UESERNAME</label>
                            <span class="iconic iconic-star" title="star" aria-hidden="true"></span>
                            <input type='text' class='form-control' id='userName' placeholder='input username' />
                        </div>
                        <div class="form-group">
                            <label for="Password1">Password</label>
                            <input type="password" class="form-control" id="Password1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="Password2">Password</label>
                            <input type="password" class="form-control" id="Password2" placeholder="comfirm Password" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;