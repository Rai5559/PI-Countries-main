const { Country } = require("../db.js");
const { Activity } = require("../db.js");
const { formatCountries } = require("../utils/generalFunctions.js");

const getCountryByName = async (name) => {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const country = await Country.findAll({
    where: {
      name: capitalized,
    },
  });
  return country;
};


const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] } 
    }
  });
  return formatCountries(countries);
};

const getCountryById = async (id) => {
  const country = await Country.findAll({
    where: {
      id: id.toUpperCase(),
    },
  });
  return country;
};


module.exports = {
  getCountryByName,
  getAllCountries,
  getCountryById,
};
