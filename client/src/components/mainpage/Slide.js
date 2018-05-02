import React, { Component } from 'react';
import logo from '../picture/1.jpg'
class Slide extends Component {
    render() {
        return (
            <div className='row' >
                <div className='col-sm-12' style={{ border: '1px solid black' }}>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={logo} alt='just a p' width="500" height="300" class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={logo} alt='just a p' width="500" height="300" class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={logo} alt='just a p' width="500" height="300" class="d-block w-100" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Slide;