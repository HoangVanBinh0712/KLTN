export const GlobalReducer = (state, action) => {
    const { type, payload: { industry, city } } = action

    switch (type) {
        case 'SET_INDUSTRY':
            return {
                ...state,
                industry
            }
        case 'SET_CITY':
            return {
                ...state,
                city
            }
        default:
            return state
    }
}