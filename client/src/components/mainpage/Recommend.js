import React, { Component } from 'react'
import './recommend.css';
import ig from '../picture/iphone.jpeg';

class Recommend extends Component {
    render() {
        return (
            <div className="recommend">
                <div className='recommend-sell'>
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
                </div>
                <div className='recommend-re'>
                    <div className='recommend-lt'>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img url={ig} />
                        </div>
                        <div className='recommend-next'>
                         MORE
                        </div>

                    </div>
                    <div className='recommend-rt'>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img url={ig} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                    </div>
                    <div className='recommend-lb'>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img url={ig} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                    </div>
                    <div className='recommend-rb'>
                        <div className='recommend-type'>type</div>
                        <div className='recommend-image'>
                            <img url={ig} />
                        </div>
                        <div className='recommend-next'>
                        MORE
                        </div>
                    </div>
                </div>
                <div className='recommend-buy'>

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

                </div>
            </div>
        )
    }
}

export default Recommend;