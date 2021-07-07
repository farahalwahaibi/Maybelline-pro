//initial state
let catInitialState = {
    categories: [
        // {normalizedName: 'Sweet', displayName: 'Sweet', description: 'Description Goes Here'},
        // {normalizedName: 'Drinks', displayName: 'Drinks', description: 'Description Goes Here'},
    ],
    productsType: [],
    active: null,
    activeProd: null,
}

//the reducer 
const catReducer = (state = catInitialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'ACTIVE':
            let desc = 'Description Goes Here';
            let categories = state.categories.map(category =>{
                if(category===payload){
                    let result1 = category;
                    desc = result1.description;
                    return result1 ;
                }
                return category;
            });
            return {activeCat:payload, categories, desc};

        case 'RESET':
            return catInitialState; 

        case 'get':
            let result = [];
            for (let category of payload) {
                if (!result.includes(category.brand)) {
                    result.push(category.brand);
                }
              }
              return {
                categories: [...result],
                active: state.active,
              };    
        
              case 'getPro':
                let result2 = [];
                for (let category of payload) {
                    if (!result2.includes(category.product_type)) {
                        result2.push(category.product_type);
                    }
                  }
                  return {
                    productsType: [...result2],
                    activeProd: state.activeProd,
                };      
        
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