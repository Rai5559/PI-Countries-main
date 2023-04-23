import styled from "styled-components";

export const ActivitiesWrapper = styled.div`
  text-align: center;
  background-image: url("https://i.pinimg.com/originals/5b/60/bc/5b60bc64b123e9a16cb931dcf77baa66.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  h1 {
    font-family: "Urban Jungle";
    font-size: 3rem;
    letter-spacing: 10px;
    margin-bottom: 50px;
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const ActivityCard = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  height: 320px;
  width: 270px;
  box-shadow: 2px 2px 2px 2px #000;
  transition: transform 0.5s ease-in-out;
  height: fit-content;

  &:hover {
    transform: scale(1.1);
  }

  h2 {
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: auto;
    width: 20%;
    height: 20%;
    border-radius: 10px;
    background-color: #1e1e1e;
    color: #fff;
    border: 2px solid red;
    transition: 0.5s;
    &:hover {
      background-color: #fff;
      color: #1e1e1e;
    }
  }
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    margin: 0.5rem 0;
    font-family: sans-serif;
  }

  p:first-child {
    margin-top: auto;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  button {
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 1rem;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #1e1e1e;
    color: #fff;
    border: 2px solid #fff;
    transition: 0.5s;
    &:hover {
      background-color: #fff;
      color: #1e1e1e;
    }
  }
`;
