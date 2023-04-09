import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart, removeCart } from '../../fakeDbStore';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'
import { Link } from "react-router-dom";

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
        // const newCart = [...cart, product]
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart= [...remaining, exist]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        console.log(savedCart)
        setCart(savedCart)
    },[products])

    const handleClearCart = () =>{
        setCart([])
        removeCart()
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
                <Cart cart={cart}>
                    <Link to={'/orders'}>Review Order</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;