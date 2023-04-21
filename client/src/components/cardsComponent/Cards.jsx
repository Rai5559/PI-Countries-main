import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearSearch } from "../../redux/actions";
import Card from "../cardComponent/Card";
import { CardsStyle } from "./cardsStyles";
import Pagination from "../../components/paginationComponent/Pagination.jsx";


const Cards = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.searchResults.length > 0 ? state.searchResults : state.countries;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);


  useEffect(() => {
    setCurrentPage(1);
    dispatch(clearSearch());
  }, [dispatch]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const pageNumbers = Math.ceil(countries.length / countriesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 if (currentCountries.length === 0) {
    return (
      <CardsStyle>
        <p>Network error, please contact support</p>
      </CardsStyle>
    );
  }

  return (
    <CardsStyle>
      {currentCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flags={country.flags}
          continent={country.continent}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={pageNumbers}
        handlePageClick={handlePageClick}
      />
    </CardsStyle>
  );
};

export default Cards;
