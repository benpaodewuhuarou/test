import React ,{Component} from 'react';
import logo from './1.jpg'
class Nav extends Component {
    render (){
        return(
            <div className='row'>
                <div className='col-sm-4'>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>2</li>

                        <li>4</li>
                        <li>3</li>

                    </ul>
                </div>
                <div className='col-sm-8'>
                       <img src={logo} alt='just a p' width="500" height="300" />
                </div>

            </div>
        )
    }
}

export default Nav;