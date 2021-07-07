//initial state
let productInitialState = {
    products: [
        // {categoryAssociation:'Sweet',name:'Chocolate Cake',description:'Product Description Goes Here', price:'10$', inStock:4},
        // {categoryAssociation:'Sweet',name:'Macaron',description:'Product Description Goes Here', price:'1.5$', inStock:10},
        // // {categoryAssociation:'Sweet',name:'Cheesecake',description:'Product Description Goes Here', price:'1.5$', inStock:10},
        // {categoryAssociation:'Drinks',name:'Cappuccino',description:'Product Description Goes Here',price:'17$', inStock:7},
        // {categoryAssociation:'Drinks',name:'Lemonade',description:'Product Description Goes Here', price:'150$',  inStock:5},
        // {categoryAssociation:'Drinks',name:'Hot Chocolate',description:'Product Description Goes Here', price:'8$', inStock:3},   
    ],
    renderProducts: [],
}

//the reducer 
const productReducer =  (state = productInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let pay =payload;
            let renderProducts = state.products.filter((product) =>{
                    return product.product_type === pay ;
                });
                return {...state, renderProducts}
                
        case 'get':
            console.log(payload, 'pppppppppppppppppppppppp');
            return {products:payload, renderProducts:[]}; 
            
            
        default:
            return state;
    }
}


// action
// 1st action for active
export const activePro = (products) => {
    return {
        type: 'ACTIVE',
        payload: products,
    }
}

//2nd action for reset
export const resetPro = () => {
    return {
        type: 'RESET',
    }
}


export default productReducer;