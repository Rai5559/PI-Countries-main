import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  SEARCH_COUNTRIES,
  CLEAR_SEARCH,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  POST_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
} from "./actions";

const initialState = {
  countries: [],
  countryDetail: [],
  searchResults: [],
  activities: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchResults: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchResults: [],
      };
    case FILTER_BY_CONTINENT:
      const filteredCountries = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        searchResults: filteredCountries,
      };

    case FILTER_BY_ACTIVITY:
      const filteredByActivity = state.countries.filter((country) => {
        return country.activities.some(
          (activity) => activity.name === action.payload
        );
      });
      return {
        ...state,
        searchResults: filteredByActivity,
      };

    case SORT_BY_NAME:
      const sortedByName = [...state.countries].sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        countries: sortedByName,
      };

    case SORT_BY_POPULATION:
      const sortedByPopulation = [...state.countries].sort((a, b) => {
        if (action.payload === "asc") {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
      return {
        ...state,
        countries: sortedByPopulation,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        countries: state.countries.map((country) => {
          if (country.id === action.payload.id) {
            return {
              ...country,
              activities: [...country.activities, action.payload],
            };
          } else {
            return country;
          }
        }),
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
}

export default reducer;
