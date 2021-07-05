import React from 'react';
import { connect } from 'react-redux';

import { active, reset } from '../../store/categories.js';
import { Button ,Paper,Tab} from '@material-ui/core';

const Categories = props => {
    console.log(props.allCategory);
    return (
        <>
        <section>
            <h3>Browse our Categories</h3>
            <ul>
                {props.allCategory.categories.map(category =>
                    <Button onClick={() => props.active(category.normalizedName)} key={category.normalizedName}>{category.normalizedName}</Button>)}
            </ul>
        </section>
        </>
    );
}


const mapStateToProps = state => ({
    allCategory: state.category
})

const mapDispatchToProps = { active, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);