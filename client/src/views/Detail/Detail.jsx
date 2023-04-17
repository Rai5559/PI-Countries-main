import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import {
  Container,
  DivContainer,
  LoadingContainer,
  Map,
  LoadingText,
  ButtonContainer,
  HomeButton,
  FloatingBox,
} from "./detail";

const Detail = () => {
  const dispatch = useDispatch();
  const countryBdd = useSelector((state) => state.countryDetail);
  const { detailId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    dispatch(getCountryDetail(detailId));
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [dispatch, detailId]);

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <Map />
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
      ) : (
        <div>
          {countryBdd.map((country) => (
            <DivContainer key={country.id}>
              <h1>ID: {country.id}</h1>
              <h1>Name: {country.name}</h1>
              <img src={country.flags} alt={country.name} />
              <h2>Continent: {country.continent}</h2>
              <h2>Capital: {country.capital}</h2>
              <h2>Subregion: {country.subregion}</h2>
              <h2>Area: {country.area}</h2>
              <h2>Population: {country.population} inhabitants</h2>
              <h2>
                Activities:{" "}
                {country.activities.map((activity) => (
                  <ul key={activity.id}>
                    <li
                      onMouseOver={() => setSelectedActivity(activity)}
                      onMouseOut={() => setSelectedActivity(null)}
                    >{`${activity.name}`}</li>
                  </ul>
                ))}
                {selectedActivity && (
                  <FloatingBox>
                    <p>Difficulty: {selectedActivity.difficulty}</p>
                    <p>Duration: {selectedActivity.duration}</p>
                    <p>Season: {selectedActivity.season}</p>
                  </FloatingBox>
                )}
              </h2>
            </DivContainer>
          ))}
          <ButtonContainer>
            <Link to="/home">
              <HomeButton>Home</HomeButton>
            </Link>
          </ButtonContainer>
        </div>
      )}
    </Container>
  );
};

export default Detail;
