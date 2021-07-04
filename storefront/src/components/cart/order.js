'use strict';

import React from 'react';


const Cart = (props) => {
    return (
        <>
        <form>
            <h3>Order summary</h3>
            <h4>Total $0.00</h4>
            <h4>Billing Address</h4>
            <input type="text" placeholder="Full Name"></input>
            <br></br>
            <input type="text" placeholder="Address"></input>
            <br></br>
            <input type="text" placeholder="City"></input>
            <br></br>
            <input type="text" placeholder="State"></input>
            <br></br>
            <input type="text" placeholder="Zip"></input>
            <br></br>
            <h4>Payment details</h4>
            <input type="number" placeholder="Credit Card #"></input>
            <br></br>
            <input type="date" placeholder="Expiration"></input>
            <br></br>
            <input type="" placeholder="CVV"></input>
            <br></br>
            <br></br>
            <button type='submit'>Place Your Order</button>
            <br></br>
            <br></br>   
        </form>
        </>
    )
}


export default Cart;