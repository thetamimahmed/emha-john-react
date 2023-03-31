import React from 'react';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = (props) => {
    const {name, seller, price, ratings, img} = props.product;
    const handleCart = props.handleCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price'>Price: ${price}</h4>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=> handleCart(props.product)} className='cart-button'>
            Add to Cart  
             <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default SingleProduct;