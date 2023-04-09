import React from 'react';
import { addToDb } from '../../fakeDbStore';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart;
    // const {cart} = props
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {quantity}</h3>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax Total: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
            <button className='clear-btn' onClick={handleClearCart}>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button className='btn-order' onClick={handleClearCart}>
                {children}
            </button>
        </div>
    );
};

export default Cart;