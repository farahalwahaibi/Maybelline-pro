//import superagent
import superagent from 'superagent';
const API = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

//1st for get data from server
export const getData = ()=> (dispatch,state)=>{
    return superagent.get(API)
    .then(res=>{
        dispatch(getAction(res.body));
    })
}

//Action for get data :
export const getAction = payload => {
    return {
        type: 'get',
        payload: payload,
    }
}

//**************************************************************************//

//2nd for add product to cart
export const addProduct = (product)=> (dispatch,state)=>{
    superagent.put(`${API}/${product.id}`)
    .send({inStock:product.id-1})
    .then((res)=>{
        dispatch(addAction(res.body));
    })
}

//Action for add product to cart 
export const addAction = payload => {
    return {
        type: 'addProduct',
        payload: payload,
    }
}

//**************************************************************************//

//3rd for delete product from cart 
export const deleteProduct = (product)=> (dispatch,state)=>{
    superagent.put(`${API}/${product.id}`)
    .send({inStock:product.id+1})
    .then((res)=>{
        dispatch(deleteAction(res.body));
    })
}

//Action for delete product from cart 
export const deleteAction = payload => {
    return {
        type: 'deleteProduct',
        payload: payload,
    }
}

//**************************************************************************//
