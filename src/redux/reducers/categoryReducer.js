const initialState = {
    brand: null,
    type: null,
    sortBy: {
        type: 'популярности',
        sortProperty: 'rating'
    }
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_CATEGORIES':
            return {
                ...state,
                brand: null,
                type: null
            };
        case 'ALL_BRANDS':
            return {
                ...state,
                brand: null
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                brand: action.payload
            };
        case 'SET_TYPE':
            return {
                ...state,
              type: action.payload
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
}
