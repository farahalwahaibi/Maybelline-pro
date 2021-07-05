import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Paper,Tab,AppBar } from '@material-ui/core';

const Header = (props) =>{
    return (
        <>
        <Paper> 
        <Button><Link to="/"><Tab label="OUR STORE" /></Link></Button>
        <Button><Link to="/cart"><Tab label="CART(0)" /></Link></Button>
        </Paper>
        </>
    )
}


export default Header ;