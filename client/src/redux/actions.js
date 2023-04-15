import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";

export function getCountries() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/countries").then((res) => {
      dispatch({ type: GET_COUNTRIES, payload: res.data });
    });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data });
  };
}

export const searchCountries = (searchTerm) => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/countries?name=${searchTerm}`);
        dispatch({ type: SEARCH_COUNTRIES, payload: res.data });
};
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};

export const sortByName = (order) => {
  return {
    type: SORT_BY_NAME,
    payload: order,
  };
};

export const sortByPopulation = (order) => {
  return {
    type: SORT_BY_POPULATION,
    payload: order,
  };
};

// export function getCountryDetail(id) {
//     return function(dispatch) {
//         return axios.get(`http://localhost:3001/countries/${id}`)
//             .then((res) => {
//                 dispatch({type: GET_COUNTRY_DETAIL, payload: res.data})
//             })
//     }
// }
