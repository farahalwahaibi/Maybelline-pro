import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button,CardActions,CardContent,CardMedia,Grid,Typography,Container,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { add } from '../../store/cart.js';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      marginLeft: '390px',
        },
    card: {
    //   display: 'flex',
    //   flexDirection: 'column',
    },
    cardImg: {
      paddingTop: '100%',
    },
    textH: {
      textAlign: 'center',
      paddingBottom: theme.spacing(5),
    },
  }));

const ViewDetails = (props) =>{
    const classes = useStyles();
    console.log(props,'**********////////////////////***********');
    console.log(props.match.params.id,'id***********');
    
    return (
        <>
        <Container className={classes.cardGrid} >
        <Grid container spacing={4}>
        
            {props.pro.map((product)=>{
                if (product.id==props.match.params.id){
                return(
        <Grid item key={product.name}  md={6}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardImg} image={product.image_link}/>
                <CardContent>
                        <Typography  variant="h4" className={classes.textH}>{product.name}</Typography>
                        <Typography color="textSecondary">Product Type : {product.product_type}</Typography>
                        <Typography color="textSecondary">Price : {product.price}</Typography>
                        <Typography color="textSecondary">inStock : {product.id}</Typography>
                        <Typography color="textSecondary">Rating : {product.rating}</Typography>
                        <Typography color="textPrimary">Description : {product.description}</Typography>
                </CardContent>
                <CardActions >
                        <Button size="small" color="primary" onClick={() => props.add(product.name)}  key={product.name}>Add To Cart</Button>
                        <Button size="small" color="primary" component={Link} to='/'>Back</Button>
                </CardActions>
            </Card>
        </Grid>
                )}
            })}
        
        </Grid>
        </Container>
        </>
         );
};

const mapStateToProps = state => ({
    pro : state.product.products,
    activePro : state.product.renderProducts,
    allCategories: state.category,

})

const mapDispatchToProps = { add };

export default connect (mapStateToProps,mapDispatchToProps)(ViewDetails);

