import React, { Component } from 'react';
import logo from '../picture/1.jpg';
import './nav.css';
class Nav extends Component {
    render() {
        return (
            <div className='memu'>
            <div className='row nav'>
                {/* <div className='col-sm-12'> */}
                    <ul className='nav-list col-sm-12'>
                        <li className='e'>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
                {/* </div> */}
            </div>
            <div className='row sublist-ele sublist' id='u'>
            <ul className=' col-sm-12 '>
                        <li >Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            {/* <div className='row sublist-clo sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            <div className='row sublist-spo sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            <div className='row sublist-hea sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            <div className='row sublist-sho sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            <div className='row sublist-book sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div>
            <div className='row sublist-home sublist'>
            <ul className='nav-list col-sm-12'>
                        <li>Consumer Electronics</li>
                        <li>Clothing</li>
                        <li>Sports & outdoor</li>
                        <li>Health& beauty</li>
                        <li>Shoes&bag</li>
                        <li>Book</li>
                        <li>Home Appliance</li>
                    </ul>
            </div> */}
            </div>
        )
    }
}

export default Nav;