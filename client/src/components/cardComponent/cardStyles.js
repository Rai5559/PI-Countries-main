import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 300px;
    width: 300px;

 

  h1,
  h2 {
    color: #fff;
    margin: 0.5rem 0;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
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