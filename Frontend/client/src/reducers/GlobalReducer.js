export const GlobalReducer = (state, action) => {
    const { type, payload: { industries, cities } } = action

    switch (type) {
        case 'SET_INDUSTRY':
            return {
                ...state,
                industries
            }
        case 'SET_CITY':
            return {
                ...state,
                cities
            }
        default:
            return state
    }
}