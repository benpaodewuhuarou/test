import React, { Component } from 'react';
import './product.css';
import pic from '../picture/1.jpg'
class Product extends Component {
    render() {
        return (
            <div className='product-container'>
                <div className='product-info row' >
                    <div className='product-image col-sm-8'>
                        <div id="pictureCarouse" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#pictureCarouse" data-slide-to="0" class="active"></li>
                                <li data-target="#pictureCarouse" data-slide-to="1"></li>
                                <li data-target="#pictureCarouse" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src={pic} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={pic} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={pic} alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#pictureCarouse" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#pictureCarouse" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='product-user col-sm-4'>
                        <div className='product-user-name pi'>
                        </div>
                        <div className='product-user-location pi' >
                        </div>
                        <div className='product-user-price pi'>
                        </div>
                        <div className='product-user-description pi'>
                        </div>
                        
                      
                    </div>
                </div>
                <div className='product-chat'>
                        
                </div>
            </div>
        )
    }
}

export default Product;