import React, { Component } from 'react'
import './recommend.css';
import c1 from '../picture/c1.png';
import c2 from '../picture/c2.png';
import c3 from '../picture/c3.png';
import c4 from '../picture/c4.png';
import { Link} from 'react-router-dom';

class Recommend extends Component {
    render() {
        return (
            <div className="recommend">
                <div className='recommend-sell'>
                <Link to={'/sell'}>
                    <div className='recommend-top'>
                        sell
                   </div>
                    <div className='recommend-innerback'>
                    </div>
                    <div className='recommend-line'>

                    </div>
                    <div className='recommend-text'>
                        <h3>What do you want to sell</h3>
                        <p className='recommend-p'>sell you do not need</p>
                        <p className='recommend-begin'>BEGIN</p>
                    </div>
                    </Link>
                </div>
                <div className='recommend-re'>
                <Link to={`/productType?electric`}>
                    <div className='recommend-lt'>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img src={c1} />
                        </div>
                        <div className='recommend-next'>
                         MORE
                        </div>

                    </div>
                    </Link>
                    
                    <div className='recommend-rt'>
                    <Link to={`/productType?daily use`}>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img src={c2} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                        </Link>
                    </div>
                    <div className='recommend-lb'>
                    <Link to={'`/productType?clothing`'}>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img src={c3} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                        </Link>
                    </div>
                    <div className='recommend-rb'>
                    <Link to={`/productType?book`}>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img src={c4} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                    </Link>
                    </div>
                </div>
                <div className='recommend-buy'>
                <Link to={'/sell'}>
                    <div className='recommend-top'>
                        buy
                   </div>
                    <div className='recommend-innerback'>
                    </div>
                    <div className='recommend-line'>

                    </div>
                    <div className='recommend-text'>
                        <h3>What do you want to buy</h3>
                        <p className='recommend-p'>find what you want</p>
                        <p className='recommend-begin'>BEGIN</p>
                    </div>
            </Link>
                </div>
            </div>
        )
    }
}

export default Recommend;