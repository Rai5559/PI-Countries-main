import React, { useState } from "react";
import { connect } from "react-redux";
import { postActivity } from "../../redux/actions";
import FormBody from "../../components/formComponent/FormBody";

function Form({ postActivity, countries }) {
  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "Summer",
    countries: [],
  });
  const [success, setSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    other: "",
    name: "*",
    countries: "*",
  });

  function handleChange(event) {
    let value = event.target.value;

    if (event.target.name === "name") {
      if (!/^[a-zA-Z]{4,10}$/.test(value)) {
        setErrorMessage({
          ...errorMessage,
          name: "Please enter a valid name, it must be between 4 and 10 characters long and only contain letters ",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          name: "",
        });
      }
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    setInput({
      ...input,
      [event.target.name]: value,
    });
  }

  function handleCountrySelect(country) {
    if (!input.countries.includes(country.id)) {
      setInput({
        ...input,
        countries: [...input.countries, country.id],
      });
    }
    if (input.countries.length >= 0)
      setErrorMessage({
        ...errorMessage,
        countries: "",
      });
  }

  function handleCountryRemove(index) {
    setInput({
      ...input,
      countries: input.countries.filter((_, i) => i !== index),
    });
    input.countries.length > 1
      ? setErrorMessage({
          ...errorMessage,
          countries: "",
        })
      : setErrorMessage({
          ...errorMessage,
          countries: "Please select at least one country",
        });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await postActivity(input);
      setSuccess(true);
      setErrorMessage({
        ...errorMessage,
        other: "",
      });
    } catch (error) {
      setErrorMessage({
        ...errorMessage,
        other: `${error}`,
      });
    }
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <FormBody
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errorMessage={errorMessage}
        input={input}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        filteredCountries={filteredCountries}
        handleCountrySelect={handleCountrySelect}
        handleCountryRemove={handleCountryRemove}
        success={success}
      />
    </div>
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
