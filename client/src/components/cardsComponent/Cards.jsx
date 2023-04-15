import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../cardComponent/Card";
import { CardsStyle } from "./cardsStyles";
import Pagination from "../../components/paginationComponent/Pagination.jsx";

const Cards = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

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
