import React, { Component } from 'react';
import logo from '../picture/logo.jpg';
import axios from 'axios';
import './header.css';
import { connect } from 'react-redux';
import { fetchUser, signup, login,logout } from '../../actions';
import { bindActionCreators } from 'redux';
import { Link,Redirect,withRouter} from 'react-router-dom';

class Header extends Component {
    handlelogout = ()=>{
        console.log('out')
        this.props.logout();
        this.props.history.push('/home');
    }
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <Link to={'/sign'}>
                        <button class="btn btn-outline-secondary auth" onClick={this.props.log} type="button">Log  in</button>
                    </Link>,
                    <Link to={'/login'}>
                        <button class="btn btn-outline-secondary auth" onClick={this.props.sign} type="button">sign up</button>
                    </Link>
                ];
            default:
                return [<div className='header-div'><div ClassName='header-username'>{this.props.auth}</div>
                <div><button class="btn btn-outline-secondary" onClick={this.handlelogout} type="button">Log out</button></div></div>
            ]

        }
    }
    handleSumbit=(e)=>{
        e.preventDefault();
        
        const formData = new FormData(e.target);
        let value = formData.get('value');
        this.props.history.push(`/productSearch?${value}`);
    }
   
    render() {
        return (
            <div className='row header-con' >
                <div className='col-sm-2 brand'>
                   <Link to={'/home'}>
                    <h3>SECOND HAND</h3>
                   </Link>
             
                </div>
                <div className='col-sm-1'>
                    <div className='location'> 
                          <i class="material-icons" id='clo'>add_location</i>
                    </div>
                </div>
                <div className='col-sm-5' >
                    <div className="input-group header-search vvvvv" >
                    <form onSubmit={this.handleSumbit} className='vvvvv'>
                        <input type="text" name ='value' className='search-input' placeholder="Search for..." />
                        <input class="btn  btn-outline-secondary " type="submit" id="btn" value="Go"/>
                    </form>
                    </div>
                </div>
                <div className='col-sm-4' >
                    {this.renderContent()}
                </div>
            </div>

        )
    }

}
function mapStateToprops(state) {
    return { auth: state.auth };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUser: fetchUser,
        log: login,
        sign: signup,
        logout:logout

    }, dispatch);
}
export default withRouter( connect(mapStateToprops, mapDispatchToProps)(Header));