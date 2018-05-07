import React, { Component } from 'react';
import logo from '../picture/1.jpg';
import './nav.css';
class Nav extends Component {
    state = {
        r: 'ele',
        name: null,
        hover: false,
    };

    titleEnter = (event) => {
        this.setState({
            name: event.target.id,
            hover: true
        });
    }
    titleLeave = (event) => {
        this.setState({
            hover: false
        });
    }
    contentEnter = (event) => {
        this.setState({
            hover: true
        });
    }
    contentLeave = (event) => {
        this.setState({
            name: null,
            hover: false
        })
    }

    render() {
        return (
            <div className='memu'>
                <div className='row nav'>
                    {/* <div className='col-sm-12'> */}
                    <ul className='nav-list col-sm-12'>
                        <li className='ele' id='ele' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a href='#'>
                                <div className='nav-list-title' id='ele'>
                                    <i class="material-icons" id='ele'>kitchen</i>
                                    <p id='ele'>Electronics</p>
                                </div>
                            </a>
                        </li>
                        <li className='clo' id='clo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='clo'>
                                    <i class="material-icons" id='clo'>favorite</i>
                                    <p id='clo'>Clothing</p>
                                </div>
                            </a>

                        </li>
                        <li className='spo' id='clo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='clo'>
                                    <i class="material-icons" id='clo'>landscape</i>
                                    <p id='clo'>Sports</p>
                                </div>
                            </a></li>
                        <li className='hea' id='hea' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='hea'>
                                    <i class="material-icons" id='hea'>face</i>
                                    <p id='hea'>Health</p>
                                </div>
                            </a></li>
                        <li className='car' id='car' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='car'>
                                    <i id='car' class="material-icons">directions_car</i>
                                    <p id='car'>car</p>
                                </div>
                            </a></li>
                        <li className='boo' id='boo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='boo'>
                                    <i class="material-icons" id='boo'>book</i>
                                    <p id='boo'>Book</p>
                                </div>
                            </a></li>
                        <li className='hom' id='hom' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <div className='nav-list-title' id='hom'>
                                    <i class="material-icons" id='hom'>home</i>
                                    <p id='hom'>Home Appliance</p>
                                </div>
                            </a></li>
                    </ul>
                    {/* </div> */}
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'ele' ? 'row sublist ele-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>FACE</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'clo' ? 'row sublist clo-show' : 'row  sublist'}>
                    
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'spo' ? 'row sublist spo-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'hea' ? 'row sublist hea-show'  : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'car' ? 'row sublist car-show' : 'row  sublist '}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'boo' ? 'row sublist boo-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'hom' ? 'row sublist hom-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Book</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Home Appliance</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Sports</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Health</p>
                                </div>
                            </a></li>
                        <li>
                            <a>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>car</p>
                                </div>
                            </a></li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Nav;