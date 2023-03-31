import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {cart.length}</h3>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax Total: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;