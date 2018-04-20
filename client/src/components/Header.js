import React, { Component } from 'react';
import logo from './logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className='row' style={{ border: '1px solid black' }}>
                <div className='col-sm-1 col-centered'>
                    <img src={logo} alt='logo' width='50px' height='50px' />
                </div>
                <div className='col-sm-3 col-centered'>
                <div class="dropdown">
                            <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown2</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown3</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            </div>
                           
                    {/* <div class="btn-group">
                        <button class="btn btn-outline-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Large button
                        </button>
                        <div class="dropdown-submenu">
                            <ul class="dropdown-menu">
                                <li>llll</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <div className='col-sm-5 col-centered' >
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." />
                        <span class="input-group-btn">
                            <button class="btn btn-outline-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
                <div className='col-sm-3 col-centered'>
                    <button class="btn btn-outline-secondary" type="button">sign in</button>
                    or
                <button class="btn btn-outline-secondary" type="button">sign up</button>
                </div>
            </div>

        )
    }
}
export default Header;