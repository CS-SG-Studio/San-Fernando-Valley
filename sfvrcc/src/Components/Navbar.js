import React from 'react';
import { Link } from 'react-router-dom';
import {Colors, Images, Metrics} from '../Themes/index';
import '../Styles/Navbar.css';

const NavBar = () => {
 

    return (
        <>
        <header>
            <h1>San Fernando Valley Refugee Children's Center Donation Portal</h1>
        </header>
        <nav className="topNav">
                    <Link to="/" className="nav-links" > Profile </Link>
                    <Link to="/" className="nav-links" > Events </Link>
                    <Link to="/" className="nav-links" > Your Impact </Link>
                    <Link to="/" className="nav-links" > RCC website </Link>
        </nav>
        </>
    );
}

export default NavBar; 