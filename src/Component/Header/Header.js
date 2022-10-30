import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='home'>HOME</Link>
                <Link to='review'>REVIEW</Link>
                <Link to='dashbord'>DASHBORD</Link>
                <Link to='blogs'>BLOGS</Link>
                <Link to='about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;