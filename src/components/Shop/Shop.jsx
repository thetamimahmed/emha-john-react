import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const loadProducts = async() =>{
            const res = await fetch('products.json')
            const data = await res.json();
            setProducts(data);
        }
        loadProducts()
    }, [])

    const [cart, setCart] = useState([])
    const handleCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => {
                        return <SingleProduct
                        key={product.id} 
                        product={product} 
                        handleCart={handleCart}
                        ></SingleProduct>
                    })
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;