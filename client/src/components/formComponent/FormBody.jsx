import {
  BGContainer,
  GeneralContainer,
  FormContainer,
  ErrorSpan,
  CountriesContainer,
  Selected,
  SuccessSpan,
} from "./formStyles";
import { Link } from "react-router-dom";

const FormBody = (props) => {
  const {
    handleSubmit,
    handleChange,
    errorMessage,
    input,
    searchTerm,
    handleSearch,
    filteredCountries,
    handleCountrySelect,
    handleCountryRemove,
    success,
  } = props;
  return (
    <BGContainer>
      <GeneralContainer>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {errorMessage.name && <ErrorSpan>{errorMessage.name}</ErrorSpan>}
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            value={input.difficulty}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="duration">Duration (hr)</label>
          <select
            name="duration"
            value={input.duration}
            onChange={handleChange}
          >
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <label htmlFor="season">Season</label>
          <select name="season" value={input.season} onChange={handleChange}>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>

          <CountriesContainer>
            <label htmlFor="countries">Countries</label>
            <input type="text" onChange={handleSearch} value={searchTerm} />
            <ul>
              {filteredCountries.map((country) => (
                <li key={country.id}>
                  {country.name}{" "}
                  <button
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                  >
                    +
                  </button>
                </li>
              ))}
            </ul>
            <div>
              {input.countries.map((country, index) => (
                <span key={index}>
                  {country}{" "}
                  <Selected
                    type="button"
                    onClick={() => handleCountryRemove(index)}
                  >
                    x
                  </Selected>
                </span>
              ))}
            </div>
            {errorMessage.countries && (
              <ErrorSpan>{errorMessage.countries}</ErrorSpan>
            )}
          </CountriesContainer>
          {!errorMessage.name &&
            !errorMessage.countries &&
            !errorMessage.other && <button type="submit">Create</button>}
          {errorMessage.other && <ErrorSpan>{errorMessage.other}</ErrorSpan>}
          {errorMessage.other && (
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Reload
            </button>
          )}
          {success && (
            <SuccessSpan> Activity created successfully! </SuccessSpan>
          )}
          {success && (
            <button onClick={() => window.location.reload()}>OK</button>
          )}
        </FormContainer>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </GeneralContainer>
    </BGContainer>
  );
};

export default FormBody;
