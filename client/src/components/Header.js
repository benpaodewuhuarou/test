import React ,{Component}from 'react';

 class Header extends Component {
    render(){
        return(
            <div className='row' style={{'background-color':'yellow'}}>
                <div className='col-m-3'>
                logo
                </div>
                <div className='col-sm-6'>
                 search box
                </div>
                <div className='col-sm-3'>
                sign in or sign up
                </div>
            </div>

        )
    }
}
export default Header;