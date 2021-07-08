import React from 'react';
import {TextField,Button,Typography,Paper,Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      marginLeft: '370px',
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
  // let total = 0;
  console.log(props,'order here*************');
    const classes = useStyles();

    return (
        <>
        <form>
            <Container className={classes.cardGrid}>
                <Paper className={classes.paper}>
            <h3>Order summary</h3>
            {props.totalAdd.cart.map((pro)=>{
              return(
              <li>{pro}</li>
              )
              
            })}
            {props.totalAdd.price.map((val)=>{
                return (
                  <p>{val}
                  {/* <p>{total+=val}</p> */}
                  </p>
                )
              })}
            {/* <li>{props.totalAdd.cart}{props.totalAdd.price}</li> */}
            <br></br>
            <h4>Total:  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; $
              {/* {total} */}
              </h4>
            <Grid className={classes.card}>
            <Typography variant="h6">Billing Address</Typography>
            <TextField type="text" label="Full Name" name="full name"></TextField>
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

const mapStateToProps = state => ({
  pro : state.product.renderProducts,
  activePro : state.product,
  allCategories: state.category,
  totalAdd : state.cart,
})

export default connect (mapStateToProps)(Cart);

// export default Cart;