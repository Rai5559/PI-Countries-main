import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { NavBarContainer, NavLinks, SearchBarContainer, FilterContainer } from "./navBarStyles";
import { clearSearch, searchCountries, filterByContinent, filterByActivity, sortByName, sortByPopulation } from "../../redux/actions";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const name = event.target.value;
    if (name) {
      dispatch(searchCountries(name));
    } else {
      dispatch(clearSearch());
    }
  };

  const handleContinentFilter = (event) => {
    const continent = event.target.value;
    dispatch(filterByContinent(continent));
  };

  const handleActivityFilter = (event) => {
    const activity = event.target.value;
    dispatch(filterByActivity(activity));
  };

  const handleNameSort = (event) => {
    const order = event.target.value;
    dispatch(sortByName(order));
  };

  const handlePopulationSort = (event) => {
    const order = event.target.value;
    dispatch(sortByPopulation(order));
  };

  return (
    <NavBarContainer>
      <NavLinks>
        <Link to="/home" >
          <h3>Home</h3>
        </Link>
        <Link to="/form">
          <h3>Form</h3>
        </Link>
      </NavLinks>
      <SearchBarContainer>
        <input type="text" placeholder="Search Country" onChange={handleSearch} />
      </SearchBarContainer>
      <FilterContainer>
        <select onChange={handleContinentFilter}>
          <option value="">Filter by Continent</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select onChange={handleActivityFilter}>
          <option value="">Filter by Activity</option>
          <option value="hiking">Hiking</option>
          <option value="rafting">Rafting</option>
          <option value="diving">Diving</option>
          <option value="skiing">Skiing</option>
          <option value="surfing">Surfing</option>
        </select>
        <select onChange={handleNameSort}>
          <option value="">Sort by Name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select onChange={handlePopulationSort}>
          <option value="">Sort by Population</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </FilterContainer>
    </NavBarContainer>
  );
}
