//initial state
let productInitialState = {
    products: [
        {categoryAssociation:'Sweet',name:'Chocolate Cake',description:'Product Description Goes Here', price:'10$', inventoryCount:4},
        {categoryAssociation:'Sweet',name:'Macaron',description:'Product Description Goes Here', price:'1.5$', inventoryCount:10},
        {categoryAssociation:'Sweet',name:'Cheesecake',description:'Product Description Goes Here', price:'1.5$', inventoryCount:10},
        {categoryAssociation:'Drinks',name:'Cappuccino',description:'Product Description Goes Here',price:'17$', inventoryCount:7},
        {categoryAssociation:'Drinks',name:'Lemonade',description:'Product Description Goes Here', price:'150$',  inventoryCount:5},
        {categoryAssociation:'Drinks',name:'Hot Chocolate',description:'Product Description Goes Here', price:'8$', inventoryCount:3},   
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
                    return product.categoryAssociation === pay ;
                });
                return {...state, renderProducts}
                
        case 'RESET':
            return productInitialState; 
            
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