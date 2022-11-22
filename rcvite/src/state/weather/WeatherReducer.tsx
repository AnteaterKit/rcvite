export const WeatherReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'SET_CITY':
            console.log('dispatch', action);
            return {
                ...state,
                defaultCity: action.payload
            };
        case 'SET_DAYS':
            return {
                ...state,
                days: action.payload
            }
        default: return {...state};
    }
}
