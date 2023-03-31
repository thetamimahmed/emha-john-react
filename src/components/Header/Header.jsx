import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='menubar'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
};
import './Header.css'

export default Header;