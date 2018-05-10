import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logclose} from '../../actions';

class Login extends Component {

    handleSumbit=(e)=>{
        e.preventDefault();
        const url = '/auth/login';
        const formData = new FormData(e.target);
        
        axios.post(url, formData).then(function (bb) {
            console.log(bb);
        });
    }
    render() {
        return (
            <div className='loginContainer'>
                <div className='login-close' onClick={this.props.logClose}>
                    <i className="material-icons md-32">close</i>
                </div>
                <div className='loginBack'>
                </div>
                <div className='login'>

                    <h1 className='logHead'>SIGN UP</h1>

                    <form className='fo' onSubmit={this.handleSumbit}>
                        <div class="form-group">
                            <label for='userName'> UESERNAME</label>
                            <span class="iconic iconic-star" title="star" aria-hidden="true"></span>
                            <input type='text' class='form-control' name='username' placeholder='input username' />
                        </div>
                        <div class="form-group">
                            <label for="Password1">Password</label>
                            <input type="password" class="form-control" name='password' placeholder="Password" />
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
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

function mapStateToprops(state) {
    return { log:state.log};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      logClose:logclose
    }, dispatch);
  }

export default  connect(mapStateToprops,mapDispatchToProps)(Login);