const {
  getAllCountries,
  getCountryByName,
  getCountryById,
} = require("../controllers/countryController.js");

const getCountriesHandlers = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const queryName = await getCountryByName(name);
      res.status(200).send(queryName);
    } else {
      const allCountries = await getAllCountries();
      res.status(200).send(allCountries);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCountriesByIdHandlers = async (req, res) => {
  const { idPais } = req.params;
  try {
    const queryId = await getCountryById(idPais);
    res.status(200).send(queryId);
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  getCountriesHandlers,
  getCountriesByIdHandlers,
};
