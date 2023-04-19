import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActivitiesWrapper, ActivitiesContainer, ActivityCard, ActivityInfo, HomeButtonWrapper } from './activitiesStyles';
import { getActivities } from '../../redux/actions';

const Activities = () => {
  const activities = useSelector(state => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);



  return (
    <ActivitiesWrapper>
      <h1>Activities</h1>
      <ActivitiesContainer>
        {activities.map((activity, index) => (
          
            <ActivityCard key={index}>
              <h2>{activity.name}</h2>
              <img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/f/f2/latest/20160202180900/Kirby_SSB.png/800px-Kirby_SSB.png" alt="" />
              <ActivityInfo>
                <p>Difficulty: {activity.difficulty}</p>
                <p>Duration: {activity.duration} Hrs</p>
                <p>Season: {activity.season}</p>
                <p>Countries: {activity.countries}</p>
              </ActivityInfo>
            </ActivityCard>

        ))}
      </ActivitiesContainer>
      <HomeButtonWrapper>
        <Link to={"/home"}>
          <button>Home</button>
        </Link>
      </HomeButtonWrapper>
    </ActivitiesWrapper>
  );
};

export default Activities;