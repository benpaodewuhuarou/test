import React, { Component } from 'react';
import axios from 'axios';
import './category.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIndexProduct,fetchProductByID} from '../../actions';
import { Link } from 'react-router-dom';

// import a from '../picture/1.jpg'
class Category extends Component {
  
    handleIndividual = (e) =>{
         console.log(e.target);
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
        }
    }
    // componentDidMount() {
    //     axios.get('product/getIndexProduct').then((e) => {
    //         this.setState({
    //             url: e.data.data[9].image
    //         })
    //     })

    // }
    render() {
        return (
            <div>
                {this.handlecontent()}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchIndexProduct: fetchIndexProduct,
        fetchProductByID :fetchProductByID
    }, dispatch);

}
function mapStateToprops(state) {
    return {
        auth: state.auth,
        product: state.product
    };
}
export default connect(mapStateToprops, mapDispatchToProps)(Category);