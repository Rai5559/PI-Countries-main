const {Router} = require('express');
const { postActivity, getActivities, deleteActivity } = require('../handlers/activitiesHandlers');

const activitiesRouter = Router();

activitiesRouter.post('/', postActivity);

activitiesRouter.get('/', getActivities);

activitiesRouter.delete('/:idActivity', deleteActivity)

module.exports = activitiesRouter;