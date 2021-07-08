//initial state
let cartInitialState = {
    cart: [],
    addition : 0,
    price: [],
}

//the reducer 
const cartReducer = (state = cartInitialState, action) => {
    let {type, payload} = action;
    console.log(payload,'for cart addition ******');
    switch (type) {
        case 'ADD':
            if (!state.cart.includes(payload)) {
                return { ...state, cart: [...state.cart, payload.name],addition:state.cart.length+1,price:[...state.price,payload.price]};
              } 
              else {
                return { ...state, cart: [...state.cart] ,price:[...state.price]};
              }
        
        case 'REMOVE':
            let result2 = state.price.filter((val)=>{
                return val !== payload ;
            })
            let results= state.cart.filter((item)=>{
                return item !== payload ;
            }) 
                return { ...state, cart: results, addition:state.cart.length-1,price: result2};       
            
        default:
            return state;
    }
}


// action
// 1st action for active
export const add = (product) => {
    return {
        type: 'ADD',
        payload: product,
    }
}

//2nd action for active
export const remove = (product) => {
    return {
        type: 'REMOVE',
        payload: product,
    }
}


export default cartReducer;