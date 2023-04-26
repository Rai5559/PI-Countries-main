import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ActivitiesWrapper,
  ActivitiesContainer,
  ActivityCard,
  ActivityInfo,
  HomeButtonWrapper,
} from "./activitiesStyles";

class ActivitiesBody extends Component {
  render() {
    const { activities, handleDelete } = this.props;

    return (
      <ActivitiesWrapper>
        <h1>Activities</h1>
        <ActivitiesContainer>
          {activities.map((activity, index) => (
            <ActivityCard key={index}>
              <button onClick={() => handleDelete(activity.id)}>X</button>
              <h2>{activity.name}</h2>
              <img
                src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/f/f2/latest/20160202180900/Kirby_SSB.png/800px-Kirby_SSB.png"
                alt=""
              />
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
  }
}

export default ActivitiesBody;
