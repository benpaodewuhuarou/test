import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductByType,productType} from '../../actions';
import { Link,withRouter } from 'react-router-dom';


class ProductShow extends Component {
    componentDidMount(){
        const { router, params, location, routes } = this.props
        let value = this.props.location.search.substr(1);
        console.log(value);
        this.props.fetchProductByType(value);
        console.log(this.props.product);
    }
    handlecontent = () => {
        if (this.props.product) {
            
            let a = this.props.product.data;
            
            var indents = [];
            console.log(this.props.product.data)
            let length =this.props.product.data.length-this.props.product.data.length%4;
            
            for (var i = 0; i <length; i+=4) {
                
                indents.push(
                    <div className='row product-row-container'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-2 product-line' >
                    <Link to={`/individual?${a[i].itemId}`} >
                        <div className='cat-product-image'>
                        <img src={require(`../${a[i].image[0]}`)} className='product-inner-image' ></img>
                        </div> 
                        <div className='cat-product-location'>
                            STATE: {a[i].location} 
                        </div>
                        <div className='cat-product-price'>
                        PRICE: {a[i].price}
                        </div>
                    </Link>
                    </div>
                    <div className='col-sm-2 product-line' >
                    <Link to={`/individual?${a[i+1].itemId}`} >
                        <div className='cat-product-image'>
                        <img src={require(`../${a[i+1].image[0]}`)} className='product-inner-image'></img></div>

                        <div className='cat-product-location'>
                        STATE: {a[i+1].location}
                        </div>
                        <div className='cat-product-price'>
                        PRICE: {a[i+1].price}</div>
                        </Link>
                    </div>
                    
                    <div className='col-sm-2 product-line' >
                    <Link to={`/individual?${a[i+2].itemId}`} >
                        <div className='cat-product-image'>
                        <img src={require(`../${a[i+2].image[0]}`)} className='product-inner-image'></img></div>

                        <div className='cat-product-location'>
                        STATE: {a[i+2].location}
                        </div>
                        <div className='cat-product-price'>
                        PRICE: {a[i+2].price}</div>
                        </Link>
                    </div>
                    <div className='col-sm-2 product-line' >
                    <Link to={`/individual?${a[i+3].itemId}`} >
                        <div className='cat-product-image'>
                        <img src={require(`../${a[i+3].image[0]}`)} className='product-inner-image'></img></div>
                        <div className='cat-product-location'>
                        STATE: {a[i+3].location}</div>
                        <div className='cat-product-price'>
                        PRICE: {a[i+3].price}</div>
                    </Link>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
                );
            }
            return indents;
        }else{
            this.props.productType();
        }
    }
    
    render() {
        return (
            <div>
                {this.handlecontent()}
                {this.props.message}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProductByType :fetchProductByType,
        productType:productType
    }, dispatch);

}
function mapStateToprops(state) {
    return {
        auth: state.auth,
        product: state.product,
        message:state.errormessage
    };
}
export default withRouter(
connect(mapStateToprops, mapDispatchToProps)(ProductShow));