import React from 'react';
import logo from '../img/logo.png';
import {Link , Router} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__text">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className='navbar__ul'>            
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
