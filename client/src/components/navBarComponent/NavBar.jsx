import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { NavBarContainer, NavLinks, SearchBarContainer, FilterContainer, Img } from "./navBarStyles";
import { clearSearch, searchCountries, filterByContinent, filterByActivity, sortByName, sortByPopulation } from "../../redux/actions";
import mapa from "../../utils/images/mapa.png";

export default function NavBar() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);


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
        <Link to="/form">
          <h3>New Activity</h3>
        </Link>
        <Link to="/activities">
          <h3>Activities</h3>
        </Link>
      </NavLinks>
      <Img src={`${mapa}`} alt="" />
      <SearchBarContainer>
        <input type="text" placeholder="Search Country" onChange={handleSearch} />
      </SearchBarContainer>
      <Img src={`${mapa}`} alt="" />
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
          {activities.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
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
