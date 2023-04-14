import styled from 'styled-components';

export const DivContainer = styled.div`
   background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
    height: fit-content;
    width: 50vw;
    margin:auto;
 

  h1,
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center;
  }

  h1 {
    
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
  }

  img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
`;