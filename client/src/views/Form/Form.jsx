import React, { useState } from "react";
import { connect } from "react-redux";
import { postActivity } from "../../redux/actions";
import { Link } from "react-router-dom";
import { BGContainer, CountriesContainer, FormContainer, GeneralContainer, Selected, ErrorSpan } from "./formStyles";

function Form({ postActivity, countries }) {
  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "Verano",
    countries: [],
  });

  const [created, setCreated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    other: "",
    name: "",
    countries: "",
  });

  function handleChange(e) {
    const value =
      e.target.name === "difficulty" || e.target.name === "duration"
        ? Number(e.target.value)
        : e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  }

  function handleCountrySelect(country) {
    if (!input.countries.includes(country.id)) {
      setInput({
        ...input,
        countries: [...input.countries, country.id],
      });
    }
  }
  

  function handleCountryRemove(index) {
    setInput({
      ...input,
      countries: input.countries.filter((_, i) => i !== index),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (input.name === "") {
      setErrorMessage({ name: "Introduce un nombre para la actividad", countries: "" });
      return;
    }
    
    if (input.countries.length === 0) {
      setErrorMessage({ name: "", countries: "Selecciona al menos un país" });
      return;
    }
    
    await postActivity(input);
    setCreated(true);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  console.log(input);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <label htmlFor="duration">Duration</label>
        <select name="duration" value={input.duration} onChange={handleChange}>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <label htmlFor="season">Season</label>
        <select
          name="season"
          value={input.season}
          onChange={handleChange}
        >
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>

        <CountriesContainer>
          <label htmlFor="countries" >Countries</label>
          <input type="text" onChange={handleSearch} value={searchTerm}/>
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
          {errorMessage.countries && <ErrorSpan>{errorMessage.countries}</ErrorSpan>}
        </CountriesContainer>

        <button type="submit">Create</button>
      </FormContainer>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {created && (
        <div>
          Activity created successfully!
          <button onClick={() => setCreated(false)}>Close</button>
        </div>
      )}
    </GeneralContainer>
   </BGContainer>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActivity: (activity) => dispatch(postActivity(activity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
