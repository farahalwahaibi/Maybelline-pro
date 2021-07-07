import React from 'react';
import { connect } from 'react-redux';

import { activePro, resetPro } from '../../store/products';
// import { activePro, resetPro } from '../../store/products.js';
import { Button ,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getData } from '../../store/action.js';
import { useEffect } from "react";


const useStyles = makeStyles((theme) => ({
    categories: {
      margin: theme.spacing(5),
    },
  }));

const Categories = props => {
    // console.log(props.allProducts);
    const classes = useStyles();
    console.log(props.allCategories,'hereeeeeeeeeeeeeeeeeeeee');

    useEffect(() => {
        props.getData();
      }, []);


    return (
        <>
        <section className={classes.categories}>
            <Typography variant="h5">Browse Our Products</Typography>
            <ul>
                {props.allCategories.categories.map((category,idx) =>
                    <Button variant="text" color="primary" onClick={() => props.activePro(category)} key={idx}>{category}</Button>)} 
            </ul>
        </section>
        </>
    );
}


const mapStateToProps = state => ({
    allCategories: state.category,
    // allProducts: state.product
})
const mapDispatchToProps = { activePro, resetPro, getData};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);