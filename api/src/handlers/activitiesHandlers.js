const {
  controllerCreateActivity,
  controllerGetActivities,
} = require("../controllers/activityController");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const newActivity = await controllerCreateActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(201).send(newActivity);
  } catch (error) {
    res.status(500).send(error);
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
