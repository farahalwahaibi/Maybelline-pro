import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Typography,AppBar,Toolbar,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      background: '#ffffff',
      padding: theme.spacing(2),
    },
    cart: {
      alignSelf: "center",
      textAlign: "right",
      color: "#eee",
    },
    appBar: {
      zIndex: 1000
    },
  }));
  
const Header = (props) =>{
    const classes = useStyles();
    return (
        <>
        <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
        <Grid container>
        <Grid item xs>
        <Button component={Link} to="/"><Typography variant="h3" component="h3">OUR Maybelline STORE</Typography></Button>
        </Grid>
        <Grid item xs className={classes.cart}>
        <Button component={Link} to="/cart" >CART ({props.totalAdd})</Button>
        </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
        </>
    )
}

const mapStateToProps = state => ({
  totalAdd : state.cart.addition,
})

export default connect (mapStateToProps)(Header);

// export default Header ;