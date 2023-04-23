const { Country } = require("../db.js");
const { Activity } = require("../db.js");
const { formatCountries } = require("../utils/generalFunctions.js");
const { Op } = require("sequelize");
const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
  return country;
};

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
  return countries;
};

const getCountryById = async (id) => {
  const country = await Country.findAll({
    where: {
      id: id.toUpperCase(),
    },
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
  return country;
};

module.exports = {
  getCountryByName,
  getAllCountries,
  getCountryById,
};
