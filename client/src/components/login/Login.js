import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logclose,samePass,existUser,signuperrormessage} from '../../actions';
import { Link,Redirect,withRouter} from 'react-router-dom';
class Login extends Component {
    handleSumbit=(e)=>{
        e.preventDefault();
        const url = '/user/addUser';
        const formData = new FormData(e.target);
        let username= formData.get('username');
        let password = formData.get('password');
        let password2 = formData.get('Password2');
        let email = formData.get('email');
        let data = {
            username:username,
            password:password,
            password2:password2,
            email:email
        }
        this.props.existUser(username);
        console.log(this.props.error);
        if(this.props.error){
        if(data.password===data.password2){
            axios.put(url, data).then(function (bb) {
                console.log(bb);
            });
            this.props.history.push('/home');
        }else{
            this.props.samePass();
            
        }}else{
           this.props.signuperrormessage();
        }
    }
    render() {
        return (
            <div className='loginContainer'>

                <Link to={'/home'}>
                <div className='login-close'>
                    <i className="material-icons md-32">close</i>
                </div>
                </Link>
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
                            <input type="password" class="form-control" name="Password2" placeholder="comfirm Password" />
                        </div>

                        <div class="form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className='login-error-message'>{this.props.message}</div>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToprops(state) {
    return { log:state.log,
            error:state.error,
            message:state.errormessage
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      logClose:logclose,
      samePass:samePass,
      existUser:existUser,
      signuperrormessage:signuperrormessage
    }, dispatch);
  }

export default  withRouter(connect(mapStateToprops,mapDispatchToProps)(Login));