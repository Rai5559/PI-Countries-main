import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getActivities } from '../../redux/actions';
import ActivitiesBody from '../../components/activityComponent/ActivityBody';

const Activities = () => {
  const activities = useSelector(state => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);



  return (
    <div>
      <ActivitiesBody
        activities={activities}
      />
    </div>
  );
};

export default Activities;