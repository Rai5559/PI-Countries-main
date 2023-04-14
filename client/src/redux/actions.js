
import axios from 'axios';

export const GET_COUNTRIES= 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL= 'GET_COUNTRY_DETAIL';

export function getCountries() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/countries')
            .then((res) => {
                dispatch({type: GET_COUNTRIES, payload: res.data})
            })
    }
}


export function getCountryDetail(id) {
    return async function(dispatch) {
            const res = await axios.get(`http://localhost:3001/countries/${id}`);
            dispatch({type: GET_COUNTRY_DETAIL, payload: res.data});
    }
}

// export function getCountryDetail(id) {
//     return function(dispatch) {
//         return axios.get(`http://localhost:3001/countries/${id}`)
//             .then((res) => {
//                 dispatch({type: GET_COUNTRY_DETAIL, payload: res.data})
//             })
//     }
// }