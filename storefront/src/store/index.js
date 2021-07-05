//create store 
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import catReducer from './categories.js';
import productReducer from './products.js';

//combine reducer
let reducers = combineReducers({ category: catReducer ,product: productReducer });


//create store
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();