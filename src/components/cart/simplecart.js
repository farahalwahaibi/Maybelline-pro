import React from 'react';
import {connect} from 'react-redux';
import { remove } from '../../store/cart.js';
import './simplecart.scss';


const SimpleCart = (props) =>{
    let result = props.activeCart.cart;
    let result2 = props.activeCart.price;
    console.log(result,'resultt');
    if(result.length>0 ){
        return (
            <>
            <div className="simple-cart">
            <ul>
            {result.map((product)=>{
                return(
                    <li>{product}<button className="remove"  onClick={() => props.remove(product)}  key={product}>X</button></li>  
                    )
                })}
            {/* {result2.map((product)=>{
                return(
                    <li>{product}</li>  
                    )
                })}     */}
            </ul>
            </div>
            </>
        )
    }else {
        return <div></div>
    }
}

const mapStateToProps = state => ({
    activeCart : state.cart,
})

const mapDispatchToProps = { remove };

export default connect (mapStateToProps,mapDispatchToProps)(SimpleCart);