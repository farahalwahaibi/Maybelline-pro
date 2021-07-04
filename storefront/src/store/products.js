'use strict';

//initial state
let productInitialState = {
    products: [
        {categoryAssociation:'Electronics',name:'1TB USB',description:'1TB USB',price:'17', inventoryCount:'7'},
        {categoryAssociation:'Electronics',name:'Monitor',description:'Monitor', price:'150',  inventoryCount:'5'},
        {categoryAssociation:'Electronics',name:'Mouse',description:'Mouse', price:'8', inventoryCount:'3'},
        {categoryAssociation:'Food',name:'Calzones',description:'Calzones', price:'10', inventoryCount:'4'},
        {categoryAssociation:'Food',name:'Kiwi',description:'Kiwi', price:'1.5', inventoryCount:'10'},
        {categoryAssociation:'Food',name:'BlueBerry',description:'BlueBerry', price:'8', inventoryCount:'20'},
    ],
    active: false,
}

//the reducer 
export default (state = productInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let activeCat = ! state.active;
            let renderCat = state.categories.map(category =>{
                if(category.normalizedName===payload){
                    let result1 = {displayName: 'Food', description: 'food is the best'};
                    let result2 = state.categories.normalizedName;
                    return result1 + result2 ;
                }
                return category;
            });
            return {activeCat, renderCat};

        case 'RESET':
            return productInitialState; 
            
        default:
            return state;
    }
}


//action
//1st action for active
export const active = (category) => {
    return {
        type: 'ACTIVE',
        payload: category,
    }
}

//2nd action for active
export const reset = () => {
    return {
        type: 'RESET',
    }
}