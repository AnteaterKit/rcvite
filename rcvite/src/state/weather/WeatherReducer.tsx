export const WeatherReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'SET_DAYS':
            return {
                ...state,
                days: action.payload
            }
        default: return {...state};
    }
}
