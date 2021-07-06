//initial state
let cartInitialState = {
    cart: [],
    addition : 0,
}

//the reducer 
const cartReducer = (state = cartInitialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case 'ADD':
            if (!state.cart.includes(payload)) {
                return { ...state, cart: [...state.cart, payload],addition:state.cart.length+1};
              } 
              else {
                return { ...state, cart: [...state.cart] };
              }
        
        case 'REMOVE':
            let results= state.cart.filter((item)=>{
                return item !== payload ;
            }) 
                return { ...state, cart: results, addition:state.cart.length-1};       
            
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