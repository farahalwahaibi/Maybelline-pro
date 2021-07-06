import React from 'react';
import {connect} from 'react-redux';
import { add } from '../../store/cart.js';
import {Button,CardActions,CardContent,CardMedia,Grid,Typography,Container,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardImg: {
      paddingTop: '50%',
    },
  }));

const CurrentProducts = (props) =>{
    const classes = useStyles();
    console.log(props,'*********************');
    
    return (
        <>
        <Container className={classes.cardGrid} >
        <Grid container spacing={4}>
        
            {props.activePro.map((product)=>{
                return(
        <Grid item key={product.name}  md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardImg} image={`https://source.unsplash.com/random?${product.name}`}/>
                <CardContent>
                        <Typography  variant="h5">{product.name}</Typography>
                        <Typography color="textSecondary">{product.price}</Typography>
                        <Typography color="textSecondary">{product.description}</Typography>
                </CardContent>
                <CardActions>
                        <Button size="small" color="primary" onClick={() => props.add(product.name)}  key={product.name}>Add To Cart</Button>
                        <Button size="small" color="primary" >View Details</Button>
                </CardActions>
            </Card>
        </Grid>
                )
            })}
        
        </Grid>
        </Container>
        </>
         );
};

const mapStateToProps = state => ({
    pro : state.product.products,
    activePro : state.product.renderProducts,
})

const mapDispatchToProps = { add };

export default connect (mapStateToProps,mapDispatchToProps)(CurrentProducts);