const {
  controllerCreateActivity,
  controllerGetActivities,
} = require("../controllers/activityController");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!name || !difficulty || !season) {
    return res.status(400).send('Name, difficulty and season are required');
  }
  try {
    const newActivity = await controllerCreateActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(201).send("Actividad creada con exito");
  } catch (error) {
    if (error.message === "La actividad ya existe" || error.message === "La actividad debe tener al menos un país asociado") {
      res.status(409).send(error.message);
    } else {
      res.status(500).send(error);
    }
  }
};

const getActivities = async (req, res) => {
  try {
    const getAllActivities = await controllerGetActivities();
    res.status(200).send(getAllActivities);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postActivity,
  getActivities,
};
