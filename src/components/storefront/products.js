import React from 'react';
import {connect} from 'react-redux';
import { add } from '../../store/cart.js';
import {Button,CardActions,CardContent,CardMedia,Grid,Typography,Container,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(9),
      // height: '100%',
      width: '80%',
      
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    },
    cardImg: {
      paddingTop: '100%',
      height: '100%',
      width: '100%',
    },
  }));

const CurrentProducts = (props) =>{
    const classes = useStyles();
    console.log(props,'*********************');
    console.log(props.pro,'pro*********************');
    console.log(props.activePro,'actpro*********************');
    
    return (
        <>
        <Container className={classes.cardGrid} >
        <Grid container spacing={4}>
        
            {props.pro.map((product)=>{
              // {product.map((pro)=>{
                return(
                  <Button >{product.product_type}</Button>
                
              )
          //   })
          // }
                // return(
                  
        // <Grid item key={product.product_type}  md={4}>
        
        
        // <Button variant="text" color="primary" onClick={() => props.getProAction(category)} key={idx}>{category}</Button>
            /* <Card className={classes.card}>
                <CardMedia className={classes.cardImg} image={product.image_link}/>
                <CardContent>
                        <Typography  variant="h6">{product.name}</Typography>
                        <Typography color="textSecondary">Price : {product.price}</Typography>
                        <Typography color="textSecondary">inStock : {product.id}</Typography>
                        <Typography color="textSecondary">Rating : {product.rating}</Typography>
                </CardContent>
                <CardActions>
                        <Button size="small" color="primary" onClick={() => props.add(product.name)}  key={product.name}>Add To Cart</Button>
                        <Button size="small" color="primary" >View Details</Button>
                </CardActions>
            </Card> */
        // </Grid>
                 
            })
          }
        
        </Grid>
        </Container>
        </>
         );
        }

const mapStateToProps = state => ({
    pro : state.product.products,
    activePro : state.product.renderProducts,
})

const mapDispatchToProps = { add };

export default connect (mapStateToProps,mapDispatchToProps)(CurrentProducts);
