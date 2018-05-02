import React, { Component } from 'react';
import './userManagement.css';
import p from '../picture/1.jpg';

class UserManagement extends Component {
    render() {
        return (
            <div className='user-panel row'>
                <div className='user-info col-sm-4'>
                    <ul>
                        <li>
                            username
                        </li>
                        <li>
                            location
                        </li>
                        <li>
                            credit
                        </li>
                        <li>
                            email
                        </li>
                        <li>
                            message
                        </li>
                        <li>
                            phone number
                        </li>
                    </ul>
                    <div className='user-edit'>
                        <button type="button" class="btn btn-outline-success" value='submit'>edit
                        </button>
                    </div>
                </div>
                <div className='user-items col-sm-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-header'>
                                what
                            </div>
                            <div class='row'>
                                <div className='col-sm-4'>
                                    <img class="card-img-left" src={p} alt="Card image cap" />
                                </div>
                                <div className='col-sm-8'>
                                    <p className='card-text'>price</p>
                                    <p className='card-text'>location</p>
                                    <a href="#" class="card-link">edit</a>
                                    <a href="#" class="card-link">delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card user-item'>
                        <div className='card-body'>
                            <div className='card-header'>
                                what
                            </div>
                            <div class='row'>
                                <div className='col-sm-4'>
                                    <img class="card-img-left" src={p} alt="Card image cap" />
                                </div>
                                <div className='col-sm-8'>
                                    <p className='card-text'>price</p>
                                    <p className='card-text'>location</p>
                                    <a href="#" class="card-link">edit</a>
                                    <a href="#" class="card-link">delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='card-header'>
                                what
                            </div>
                            <div class='row'>
                                <div className='col-sm-4'>
                                    <img class="card-img-left" src={p} alt="Card image cap" />
                                </div>
                                <div className='col-sm-8'>
                                    <p className='card-text'>price</p>
                                    <p className='card-text'>location</p>
                                    <a href="#" class="card-link">edit</a>
                                    <a href="#" class="card-link">delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserManagement;