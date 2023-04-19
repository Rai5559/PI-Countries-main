const axios = require('axios');
require('dotenv').config();
const { Country } = require('../db.js');
const {API_URL} = process.env;


// Función para obtener solo los datos que necesitas de cada país
const formatCountryData = (countryData) => {
  return {
    id: countryData.cca3,
    name : countryData.name.common || 'No name',
    flags: countryData.flags[1] || 'No flag',
    continent: countryData.region || 'No continent',
    capital: countryData.capital?.[0] || 'No capital',
    subregion: countryData.subregion || 'No subregion',
    area: countryData.area  || 0,
    population: countryData.population || 0,
  } 
  
  
}
// Función para guardar los datos de cada país en la base de datos
const saveCountriesToDB = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    const countriesData = response.data;
    const countries = countriesData.map((countryData) => formatCountryData(countryData));

    const existingCountries = await Country.findAll();

    const newCountries = countries.filter((country) => {
      return !existingCountries.find((existingCountry) => existingCountry.id === country.id);
    });

    await Country.bulkCreate(newCountries);

    console.log(`${newCountries.length} countries saved to database`);
  } catch (error) {
    console.error('Error saving countries to database:', error);
  }
}
module.exports = { saveCountriesToDB };
