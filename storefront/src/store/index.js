//create store 
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import catReducer from './categories.js';
import productReducer from './products.js';

//combine reducer
let reducers = combineReducers({ category: catReducer ,product: productReducer, cart: cartReducer });


//create store
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();