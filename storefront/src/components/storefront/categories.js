import React from 'react';
import { connect } from 'react-redux';

import { activePro, resetPro } from '../../store/products';
// import { activePro, resetPro } from '../../store/products.js';
import { Button ,Paper,Tab} from '@material-ui/core';

const Categories = props => {
    // console.log(props.allProducts);
    console.log(props.allCategories);
    return (
        <>
        <section>
            <h3>Browse our Categories</h3>
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