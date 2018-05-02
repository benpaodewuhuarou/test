import React, { Component } from 'react';
import logo from '../picture/logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className='row' style={{ border: '1px solid black' }}>
                <div className='col-sm-1'>
                    <img src={logo} alt='logo' width='50px' height='50px' />
                </div>
                <div className='col-sm-2'>
                    <div className='btn-group'>
                        <button class="btn btn-outline-secondary " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="oi oi-map-marker"></span>
                        <span>location</span>
                        </button>

                    </div>
                </div>
                <div className='col-sm-5' >
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." />
                        <span class="input-group-btn">
                            <button class="btn btn-outline-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
                <div className='col-sm-4' style={{ border: '1px solid black' }}>
                    <button class="btn btn-outline-secondary" type="button">sign in</button>
                    or
                <button class="btn btn-outline-secondary" type="button">sign up</button>
                </div>
            </div>

        )
    }
}
export default Header;