import React from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeCart, removeToDb } from '../../fakeDbStore';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        const remainingCart = cart.filter(product => product.id !== id)
        setCart(remainingCart)
        removeToDb(id)
    }

    const handleClearCart =()=>{
        setCart([])
        removeCart()
    }

    return (
        <div className='shop-container'>
            <div style={{margin:'50px auto'}}>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/checkout'} className='btn-proceed'>Proceed Checkout</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;