import React from 'react';
import {TextField,Button,Typography,Paper,Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      marginLeft: '390px',
      width: '550px'
        },
    card: {
      display: 'flex',
      flexDirection: 'column',
    },
    btn: {
      textAlign: 'center',
      marginLeft: '170px',
          },
    paper:{
        width: '500px',
        padding: theme.spacing(9),
        // paddingBottom: theme.spacing(9),
    }
  }));

const Cart = (props) => {
    const classes = useStyles();

    return (
        <>
        <form>
            <Container className={classes.cardGrid}>
                <Paper className={classes.paper}>
            <h3>Order summary</h3>
            <h4>Total $0.00</h4>
            <Grid className={classes.card}>
            <Typography variant="h6">Billing Address</Typography>
            <TextField type="text" label="Full Name"></TextField>
            <br></br>
            <TextField type="text" label="Address"></TextField>
            <br></br>
            <TextField type="text" label="City"></TextField>
            <br></br>
            <TextField type="text" label="State"></TextField>
            <br></br>
            <TextField type="text" label="Zip"></TextField>
            <br></br>
            <br></br>
            </Grid>
            <Grid className={classes.card}>
            <Typography variant="h6">Payment details</Typography>
            <TextField type="number" label="Credit Card #"></TextField>
            <br></br>
            <TextField type="date" label="Expiration" InputLabelProps={{shrink: true, }}></TextField>
            <br></br>
            <TextField type="" label="CVV"></TextField>
            <br></br>
            <br></br></Grid>
            <Button variant="contained" color="primary" type='submit' className={classes.btn}>Place Your Order</Button>
            <br></br>
            <br></br>  
            </Paper> 
            </Container>
        </form>
        </>
    )
}


export default Cart;