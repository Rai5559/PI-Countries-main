import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 320px;
    width: 270px;
    box-shadow: 2px 2px 2px 2px #000;
    transition: transform 0.5s ease-in-out;
    &:hover {
    transform: scale(1.1);
  }

  h1,
  h2 {
    color: #000;
    margin: 0.5rem 0;
    font-family: sans-serif;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Urban Jungle';
    letter-spacing: 4px;
  }

  h2 {
    text-transform: capitalize;
  }

  img {
    width: 70%;
    height: 70%;
    margin: 0 auto;
  }
`;