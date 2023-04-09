import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='menubar'>
                <Link to="/">Shop</Link>
                <Link to="orders">Orders</Link>
                <Link to="#">Order Review</Link>
                <Link to="inventory">Manage Inventory</Link>
                <Link to="#">Login</Link>
            </div>
        </div>
    );
};
import './Header.css'

export default Header;