const axios = require('axios');
const { Country } = require('../db.js');

process.env.PGCLIENTENCODING = 'UTF8';

// Función para obtener solo los datos que necesitas de cada país
const formatCountryData = (countryData) => {
  return {
    id: countryData.cca3,
    name : countryData.name.common,
    flags: countryData.flag,
    continent: countryData.region,
    capital: countryData.capital?.[0] || 'No capital',
    subregion: countryData.subregion,
    area: countryData.area,
    population: countryData.population,
  } 
  
  
}
// Función para guardar los datos de cada país en la base de datos
const saveCountriesToDB = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3/all');
    const countriesData = response.data;
    const countries = countriesData.map((countryData) => formatCountryData(countryData));
    await Country.bulkCreate(countries);
    console.log('Countries saved to database');
  } catch (error) {
    console.error('Error saving countries to database:', error);
  }
}

module.exports = { saveCountriesToDB };
