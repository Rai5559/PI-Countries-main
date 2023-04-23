const {
  controllerCreateActivity,
  controllerGetActivities,
  controllerDeleteActivity,
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
    res.status(201).send("Activity created successfully");
  } catch (error) {
    if (error.message === "The activity already exists" || error.message === "The activity must have at least one country") {
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

const deleteActivity = async (req, res) => {
  const { idActivity } = req.params;
  try {
    const activity = await controllerDeleteActivity(idActivity);
    res.status(200).json({ message: "Activity deleted successfully", activity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  postActivity,
  getActivities,
  deleteActivity,
};
