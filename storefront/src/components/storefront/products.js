import React from 'react';
import {connect} from 'react-redux';

const CurrentProducts = (props) =>{
    console.log(props,'*********************');
    
    return (
        <ul>
            {props.activePro.map((product)=>{
                return(
                    <li key={product.name}>
                        <h3>{product.name}</h3>
                        <span>{product.price}</span>
                        <p>{product.description}</p>
                    </li>
                )
            })}
        </ul>
            );
};

const mapStateToProps = state => ({
    pro : state.product.products,
    activePro : state.product.renderProducts,
})

export default connect (mapStateToProps)(CurrentProducts);