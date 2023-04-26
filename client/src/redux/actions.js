import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";

export function getCountries() {
  return function (dispatch) {
    try {
      return axios.get("/countries").then((res) => {
        dispatch({ type: GET_COUNTRIES, payload: res.data });
      });
    } catch (error) {
      const errorMessage =
        error.response + ", Please contact the administrator/support";
      throw new Error(errorMessage);
    }
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/countries/${id}`);
      dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data });
    } catch (error) {
      const errorMessage =
        error.response + ", Please contact the administrator/support";
      throw new Error(errorMessage);
    }
  };
}

export const searchCountries = (searchTerm) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/countries?name=${searchTerm}`);
      dispatch({ type: SEARCH_COUNTRIES, payload: res.data });
    } catch (error) {
      const errorMessage =
        error.response + ", Please contact the administrator/support";
      throw new Error(errorMessage);
    }
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

export const postActivity = (activity) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("/activities", activity);
      dispatch({ type: POST_ACTIVITY, payload: res.data });
    } catch (error) {
      const errorMessage =
        error.response.data + ", Please reload and try again";
      throw new Error(errorMessage);
    }
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("/activities");
      dispatch({ type: GET_ACTIVITIES, payload: res.data });
    } catch (error) {
      const errorMessage =
        error.response + ", Please contact the administrator/support";
      throw new Error(errorMessage);
    }
  };
};

export const deleteActivity = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/activities/${id}`);
      dispatch({ type: DELETE_ACTIVITY, payload: res.data });
    } catch (error) {
      const errorMessage =
        error.response + ", Please contact the administrator/support";
      throw new Error(errorMessage);
    }
  };
};
