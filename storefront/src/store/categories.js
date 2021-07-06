//initial state
let catInitialState = {
    categories: [
        {normalizedName: 'Sweet', displayName: 'Sweet', description: 'Description Goes Here'},
        {normalizedName: 'Drinks', displayName: 'Drinks', description: 'Description Goes Here'},
    ],
    active: null,
}

//the reducer 
const catReducer = (state = catInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let desc = '';
            let categories = state.categories.map(category =>{
                if(category.normalizedName===payload){
                    let result1 = category;
                    desc = result1.description;
                    return result1 ;
                }
                return category;
            });
            return {activeCat:payload, categories, desc};

        case 'RESET':
            return catInitialState; 
            
        default:
            return state;
    }
}


//action
//1st action for active
// export const active = (category) => {
//     return {
//         type: 'ACTIVE',
//         payload: category,
//     }
// }

// //2nd action for active
// export const reset = () => {
//     return {
//         type: 'RESET',
//     }
// }


export default catReducer;