'use strict';

//initial state
let catInitialState = {
    categories: [
        {normalizedName: 'Food', displayName: 'Food', description: 'food is the best'},
        {normalizedName: 'Electronics', displayName: 'Electronics', description: 'electronics is the best'},
    ],
    active: false,
}

//the reducer 
export default (state = catInitialState, action) => {
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
            return catInitialState; 
            
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