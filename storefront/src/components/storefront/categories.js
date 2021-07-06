import React from 'react';
import { connect } from 'react-redux';

import { activePro, resetPro } from '../../store/products';
// import { activePro, resetPro } from '../../store/products.js';
import { Button ,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    categories: {
      margin: theme.spacing(5),
    },
  }));

const Categories = props => {
    // console.log(props.allProducts);
    const classes = useStyles();
    console.log(props.allCategories);
    return (
        <>
        <section className={classes.categories}>
            <Typography variant="h5">Browse our Categories</Typography>
            <ul>
                {props.allCategories.categories.map(category =>
                    <Button variant="text" color="primary" onClick={() => props.activePro(category.normalizedName)} key={category.normalizedName}>{category.normalizedName}</Button>)} 
            </ul>
        </section>
        </>
    );
}


const mapStateToProps = state => ({
    allCategories: state.category,
    // allProducts: state.product
})
const mapDispatchToProps = { activePro, resetPro};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);