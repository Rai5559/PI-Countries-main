import { Link } from "react-router-dom";
import {
  Container,
  DivContainer,
  LoadingContainer,
  Map,
  LoadingText,
  ButtonContainer,
  HomeButton,
  FloatingBox,
} from "./detailStyles";

const DetailBody = (props) => {
  const { isLoading, countryBdd, selectedActivity, setSelectedActivity } =
    props;
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
                {country.activities.length > 0 ? (
                  country.activities.map((activity) => (
                    <ul key={activity.id}>
                      <li
                        onMouseOver={() => setSelectedActivity(activity)}
                        onMouseOut={() => setSelectedActivity(null)}
                      >{`${activity.name}`}</li>
                    </ul>
                  ))
                ) : (
                  <span>No available activities</span>
                )}
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

export default DetailBody;
