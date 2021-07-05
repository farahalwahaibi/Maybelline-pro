//initial state
let productInitialState = {
    products: [
        {categoryAssociation:'Food',name:'Calzones',description:'Calzones', price:'10', inventoryCount:'4'},
        {categoryAssociation:'Food',name:'Kiwi',description:'Kiwi', price:'1.5', inventoryCount:'10'},
        {categoryAssociation:'Electronics',name:'1TB USB',description:'1TB USB',price:'17', inventoryCount:'7'},
        {categoryAssociation:'Electronics',name:'Monitor',description:'Monitor', price:'150',  inventoryCount:'5'},
        {categoryAssociation:'Electronics',name:'Mouse',description:'Mouse', price:'8', inventoryCount:'3'},   
    ],
    active: false,
}

//the reducer 
const productReducer =  (state = productInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let activeProducts = ! state.active;
            let renderProducts = state.products.map(product =>{
                if(product.categoryAssociation===payload){
                    let result = {categoryAssociation: product.categoryAssociation, name: product.name, description:product.description, price: product.price, inventoryCount: product.inventoryCount};
                    return result ;
                }
                return product;
            });
            return {activeProducts, renderProducts};
        
        case 'RESET':
            return productInitialState; 
            
        default:
            return state;
    }
}


//action
//1st action for active
export const active = (products) => {
    return {
        type: 'ACTIVE',
        payload: products,
    }
}

//2nd action for reset
export const reset = () => {
    return {
        type: 'RESET',
    }
}


export default productReducer;