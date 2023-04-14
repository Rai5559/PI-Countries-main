
import { GET_COUNTRIES, GET_COUNTRY_DETAIL } from './actions'

const initialState = {
    countries: [],
    countryDetail: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }

        default:
            return {...state}
    }
}

export default reducer;