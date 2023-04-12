const {Activity} = require('../db.js');

const controllerCreateActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
    })
    return newActivity;
}

const controllerGetActivities = async () => {
    const activities = await Activity.findAll();
    return activities;
}

module.exports = {
    controllerCreateActivity,
    controllerGetActivities
}


