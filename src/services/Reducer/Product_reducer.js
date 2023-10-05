const initialState = {
    products: [],
    product: ''
}

export const productRe = (state = initialState, action) => {
    switch (action.type) {
        case 'AllPro':
            return{
                ...state,
                products: action.payload,
                product: ''
            }
    
        case 'Signpro':
            return{
                ...state,
                product: action.payload
            }

        default:
            return state
    }
}