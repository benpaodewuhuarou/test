import React, { Component } from 'react';
import './product.css';
import { withRouter } from 'react-router-dom'
import { fetchProductByID } from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Product extends Component {
    componentDidMount() {
        const { router, params, location, routes } = this.props
        let itemId = this.props.location.search.substr(1);
        this.props.fetchProductByID(itemId);

    }
    handleContent = () => {
        if (this.props.product) {
            if(!this.props.product.data.length){
                return [
                    <div className='product-container'>
                    <div className='product-info row' >
                        <div className='product-image col-sm-8'>
                            <div id="pictureCarouse" class="carousel slide product-1" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#pictureCarouse" data-slide-to="0" class="active"></li>
                                    <li data-target="#pictureCarouse" data-slide-to="1"></li>
                                    <li data-target="#pictureCarouse" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner product-1">
                                    <div class="carousel-item active product-1">
                                        <img className="d-block w-100 individual-img"  src={require(`../${this.props.product.data.image}`)} alt="First slide" />
                                    </div>
                                    <div className="carousel-item product-1">
                                        <img class="d-block w-100 individual-img" src={require(`../${this.props.product.data.image}`)} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item product-1">
                                        <img className="d-block w-100 individual-img" src={require(`../${this.props.product.data.image}`)} alt="Third slide" />
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
                            TITLE: {this.props.product.data.title}
                            </div>
                            <div className='product-user-location pi' >
                            LOCATION:{this.props.product.data.location}
                            </div>
                            <div className='product-user-price pi'>
                            PRICE: {this.props.product.data.price}
                            </div>
                            <div className='product-user-description pi'>
                            EMIAL: {this.props.product.data.email}
                            </div>
    
                        </div>
                    </div>
                    <div className='product-chat'>
                    {this.props.product.data.detail}
                    </div>
                </div>
                ]
            }
           
            
        }

    }
    render() {
        return (
        <div>
           {this.handleContent()}
        </div>
        )
    }
}

function mapStateToprops(state) {
    return { product: state.product };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProductByID: fetchProductByID
    }, dispatch);
}
export default withRouter(
    connect(mapStateToprops, mapDispatchToProps)
        (Product));
