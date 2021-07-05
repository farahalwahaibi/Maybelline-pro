//initial state
let catInitialState = {
    categories: [
        {normalizedName: 'Food', displayName: 'Food', description: 'food is the best'},
        {normalizedName: 'Electronics', displayName: 'Electronics', description: 'electronics is the best'},
    ],
    active: null,
}

//the reducer 
const catReducer = (state = catInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let categories = state.categories.map(category =>{
                if(category.normalizedName===payload){
                    let result1 = category;
                    return result1 ;
                }
                return category;
            });
            return {activeCat:payload, categories};

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


export default catReducer;