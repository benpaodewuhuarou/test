import React, { Component } from 'react';

import bar1 from '../picture/bar1.jpg';
import bar2 from '../picture/bar2.jpg';
import bar3 from '../picture/bar3.jpg';
import { Link} from 'react-router-dom';

class Slide extends Component {
    render() {
        return (
            <div className='row slide-container' >
                <div className='col-sm-1'></div>
                <div className='col-sm-10' >
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        
                            <div class="carousel-item active">
                            <Link to={`/productType?clothing`}>
                                <img src={bar1} alt='just a p' width="500" height="300" class="d-block w-100" />
                                </Link>
                            </div>
                       
                        
                            <div class="carousel-item">
                            <Link to={'`/productType?electric`'}>
                                <img src={bar3} alt='just a p' width="500" height="300" class="d-block w-100" />
                                </Link>
                            </div>
                        
                        
                            <div class="carousel-item">
                            <Link to={'`/productType?book`'}>
                                <img src={bar2} alt='just a p' width="500" height="300" class="d-block w-100" />
                                </Link>
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
                <div className='col-sm-1'></div>
            </div>
        )
    }
}
export default Slide;