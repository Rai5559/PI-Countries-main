const { Activity } = require("../db.js");
const { Country } = require("../db.js");
const { formatActivities } = require("../utils/generalFunctions.js");

const controllerCreateActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const existingActivity = await Activity.findOne({ where: { name } });
  if (existingActivity) {
    throw new Error("La actividad ya existe");
  }
  if (!countries || countries.length === 0) {
    throw new Error("La actividad debe tener al menos un país asociado");
  }
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.setCountries(countries);
  return newActivity;
};

const controllerGetActivities = async () => {
  const activities = await Activity.findAll({
    include: {
        model: Country,
        attributes: ["name"],
        through: { attributes: [] },
      },
  });
  return formatActivities(activities);
};

module.exports = {
  controllerCreateActivity,
  controllerGetActivities,
};
