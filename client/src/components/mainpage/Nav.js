import React, { Component } from 'react';
import logo from '../picture/1.jpg';
import './nav.css';
import { Link, Redirect } from 'react-router-dom';
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
                                <Link to={`/productType?electric`}>
                                <div className='nav-list-title' id='ele'>
                                    <i class="material-icons" id='ele'>kitchen</i>
                                    <p id='ele'>Electronics</p>
                                </div>
                                </Link>
                            </a>
                        </li>
                        <li className='clo' id='clo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?clothing`}>
                                <div className='nav-list-title' id='clo'>
                                    <i class="material-icons" id='clo'>favorite</i>
                                    <p id='clo'>Clothing</p>
                                </div>
                                </Link>
                            </a>

                        </li>
                        <li className='spo' id='clo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?shoes`}>
                                <div className='nav-list-title' id='clo'>
                                    <i class="material-icons" id='clo'>landscape</i>
                                    <p id='clo'>Shoes</p>
                                </div>
                                </Link>
                            </a></li>
                        <li className='hea' id='hea' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?furniture`}>
                                <div className='nav-list-title' id='hea'>
                                    <i class="material-icons" id='hea'>face</i>
                                    <p id='hea'>Furniture</p>
                                </div>
                                </Link>
                            </a></li>
                        <li className='car' id='car' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?daily use`}>
                                <div className='nav-list-title' id='car'>
                                    <i id='car' class="material-icons">favorite</i>
                                    <p id='car'>Daily use</p>
                                </div>
                                </Link>
                            </a></li>
                        <li className='boo' id='boo' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?book`}>
                                <div className='nav-list-title' id='boo'>
                                    <i class="material-icons" id='boo'>book</i>
                                    <p id='boo'>Book</p>
                                </div>
                                </Link>
                            </a></li>
                        <li className='hom' id='hom' onMouseEnter={this.titleEnter} onMouseLeave={this.titleLeave}>
                            <a>
                                <Link to={`/productType?car`}>
                                <div className='nav-list-title' id='hom'>
                                    <i class="material-icons" id='hom'>home</i>
                                    <p id='hom'>Car</p>
                                </div>
                                </Link>
                            </a></li>
                    </ul>
                    {/* </div> */}
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'ele' ? 'row sublist ele-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?electric`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Computer</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?electric`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Pad</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?electric`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>Watch</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?electric`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>TV</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?electric`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Gopro</p>
                                </div>
                            </Link></li>


                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'clo' ? 'row sublist clo-show' : 'row  sublist'}>

                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?clothing`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Pants</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?clothing`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Jackets</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?clothing`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>T-shirt</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?clothing`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Sweather</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?clothing`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Coat</p>
                                </div>
                            </Link></li>

                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'spo' ? 'row sublist spo-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Huarache</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Jazz shoe</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>Jelly shoes</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Jutti</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Kitten heel</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?shoes`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Loafers</p>
                                </div>
                            </Link></li>
                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'hea' ? 'row sublist hea-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Bed</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Futon</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>Hammock</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Headboard</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Sofa</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?furniture`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Mattress</p>
                                </div>
                            </Link></li>
                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'car' ? 'row sublist car-show' : 'row  sublist '}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?daily use`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Cup</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?daily use`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>Bottle</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?daily use`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>Clippers</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?daily use`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Mirror</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?daily use`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>Nails cut</p>
                                </div>
                            </Link></li>
                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'boo' ? 'row sublist boo-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Java</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>C++</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>Python</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>Nodejs</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>.net</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>C</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?book`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>C#</p>
                                </div>
                            </Link></li>
                    </ul>
                </div>
                <div onMouseEnter={this.contentEnter} onMouseLeave={this.contentLeave} className={this.state.hover && this.state.name === 'hom' ? 'row sublist hom-show' : 'row  sublist'}>
                    <ul className=' col-sm-12 '>
                        <li>
                            <Link to={`/productType?car`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">landscape</i>
                                    <p>Convertible</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?car`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">face</i>
                                    <p>coupe</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?car`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">directions_car</i>
                                    <p>sedan</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?car`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">book</i>
                                    <p>sport</p>
                                </div>
                            </Link></li>
                        <li>
                            <Link to={`/productType?car`}>
                                <div className='sublist-title'>
                                    <i class="material-icons">home</i>
                                    <p>crossover</p>
                                </div>
                            </Link></li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Nav;