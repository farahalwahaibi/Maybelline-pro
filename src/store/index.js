//create store 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import catReducer from './categories.js';
import productReducer from './products.js';
import thunk from './middleware/thunk.js';

//combine reducer
let reducers = combineReducers({ category: catReducer ,product: productReducer, cart: cartReducer });


//create store
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();