import React, { Component } from 'react';
import logo from '../picture/logo.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import {fetchUser,signup,login} from '../../actions';
import { bindActionCreators } from 'redux';
class Header extends Component {
    handleSignin(){

    }
    renderContent() {
        switch (this.props.auth) {
          case null:
            return;
          case false:
            return [
                <button class="btn btn-outline-secondary" onClick={this.props.log}type="button">Log  in</button>,
                <button class="btn btn-outline-secondary" onClick={this.props.sign}type="button">sign up</button>
            ];
          default:
            return <li>{this.props.auth}</li>;
            
        }
      }
    // renderContent() {

    //     console.log(this.props.s);
    //     switch (this.props.s.username) {
    //       case '1qq11':
    //         return <div>{"uu"}</div>
    //       default:
    //         return <div>{"yy"}</div>
    //     }
    //   }
    render() {
        return (
            <div className='row' style={{ border: '1px solid black' }}>
                <div className='col-sm-1'>
                    <img src={logo} alt='logo' width='50px' height='50px' />
                </div>
                <div className='col-sm-2'>
                    <div className='btn-group'>
                        <button className="btn btn-outline-secondary " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="oi oi-map-marker"></span>
                            <span>location</span>
                        </button>

                    </div>
                </div>
                <div className='col-sm-5' >
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-outline-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
                <div className='col-sm-4' style={{ border: '1px solid black' }}>
                 {this.renderContent()}
                </div>
            </div>

        )
    }

}
function mapStateToprops(state) {
    return { auth:state.auth};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      fetchUser:fetchUser,
      log:login,
      sign:signup
    }, dispatch);
    
  }
export default connect(mapStateToprops,mapDispatchToProps)(Header);