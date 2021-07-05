//initial state
let productInitialState = {
    products: [
        {categoryAssociation:'Food',name:'Calzones',description:'Calzones', price:'10$', inventoryCount:'4'},
        {categoryAssociation:'Food',name:'Kiwi',description:'Kiwi', price:'1.5$', inventoryCount:'10'},
        {categoryAssociation:'Electronics',name:'1TB USB',description:'1TB USB',price:'17$', inventoryCount:'7'},
        {categoryAssociation:'Electronics',name:'Monitor',description:'Monitor', price:'150$',  inventoryCount:'5'},
        {categoryAssociation:'Electronics',name:'Mouse',description:'Mouse', price:'8$', inventoryCount:'3'},   
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