'use strict';

import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) =>{
    return (
        <>
        <nav>        
                 <Link to="/">OUR STORE</Link>
                 <Link to="/cart">CART(0)</Link>          
        </nav>
        </>
    )
}


export default Header ;