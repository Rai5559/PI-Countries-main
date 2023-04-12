function formatActivities(activities) {
  return activities.map((activity) => {
    const countries = activity.countries
      .map((country) => country.name)
      .join(", ");
    return {
      ...activity.toJSON(),
      countries,
    };
  });
}

function formatCountries(countries) {
  return countries.map((country) => {
    const activities =
      country.activities.length > 0
        ? country.activities.map((activity) => activity.name).join(", ")
        : "No data";
    return {
      ...country.toJSON(),
      activities,
    };
  });
}

module.exports = {
  formatActivities,
  formatCountries,
};
